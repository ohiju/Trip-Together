package com.ssafy.twinklebank.auth.service;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.twinklebank.application.domain.Application;
import com.ssafy.twinklebank.application.repository.ApplicationRepository;
import com.ssafy.twinklebank.application.utils.ApplicationUtils;
import com.ssafy.twinklebank.auth.data.request.CodeRequest;
import com.ssafy.twinklebank.auth.data.request.TokenRequest;
import com.ssafy.twinklebank.auth.provider.CodeProvider;
import com.ssafy.twinklebank.auth.provider.JwtTokenProvider;
import com.ssafy.twinklebank.global.exception.exceptions.category.UnAuthorizedException;
import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.member.repository.MemberRepository;
import com.ssafy.twinklebank.member.utils.MemberUtils;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthLoadService, AuthSaveService {
	private final MemberRepository memberRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtTokenProvider jwtTokenProvider;
	private final StringRedisTemplate redisTemplate;
	private final ApplicationRepository applicationRepository;
	private final CodeProvider codeProvider;

	private final long CODE_EXPIRE_TIME = 5 * 60 * 1000L; // 5분

	public Map<String, String> getCode(CodeRequest request) {
		// 	은행 서버는 등록된 `client_id`의 `redirect_url`가 맞는지 검증한다.
		Application application = verifyClientAndRedirectUrl(request);
		String clientId = application.getClientId();
		String redirectUrl = application.getRedirectUrl();

		// 사용자의 id, password가 맞는지 검증한다.
		Member member = verifyMember(request.username(), request.password());
		String memberUuid = member.getUuid();

		// 2가지가 검증되면 `redirect_url`로 code를 생성하여 보내준다.
		String code = codeProvider.generateRandom(12);

		Map<String, String> codeAndRedirectUrlMap = new HashMap<>();
		codeAndRedirectUrlMap.put("code", code);
		codeAndRedirectUrlMap.put("redirectUrl", redirectUrl);

		// code를 키로 client_id, uuid를 redis에 저장해놓는다. (5분 정도로 짧게)
		saveCode(code, clientId, memberUuid);

		return codeAndRedirectUrlMap;
	}

	private Application verifyClientAndRedirectUrl(CodeRequest request) {
		Application application = ApplicationUtils.getApplication(applicationRepository, request.clientId());
		if (!application.getRedirectUrl().equals(request.redirectUrl())) {
			throw new UnAuthorizedException("authController : ", WRONG_CLIENT_ID);
		}
		return application;
	}

	private Member verifyMember(String username, String password) {
		return MemberUtils.loadMemberByUserNameAndPassword(memberRepository, passwordEncoder, username, password);
	}

	private void saveCode(String code, String clientId, String memberUuid) {
		redisTemplate.opsForValue()
			.set("clientId:" + code, clientId, CODE_EXPIRE_TIME, TimeUnit.MILLISECONDS);

		redisTemplate.opsForValue()
			.set("memberUuid:" + code, memberUuid, CODE_EXPIRE_TIME, TimeUnit.MILLISECONDS);
	}

	public Map<String, String> getToken(TokenRequest request) {

		Member member = MemberUtils.loadMemberByUserNameAndPassword(memberRepository, passwordEncoder,
			request.username(), request.password());
		Authentication authentication =
			new UsernamePasswordAuthenticationToken(request.username(), request.password(),
				Collections.singleton(new SimpleGrantedAuthority("AUTHORITY")));

		Map<String, String> tokenMap = jwtTokenProvider.generateToken(member.getId(), member.getUuid(), authentication);

		// refresh token redis에 저장
		saveRefreshToken(member, tokenMap);
		return tokenMap;
	}

	private void saveRefreshToken(Member member, Map<String, String> tokenMap) {
		redisTemplate.opsForValue()
			.set("refresh:" + member.getId(), tokenMap.get("refresh"),
				jwtTokenProvider.getREFRESH_TOKEN_EXPIRE_TIME(), TimeUnit.MILLISECONDS);
	}
}
