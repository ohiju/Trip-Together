package com.ssafy.twinklebank.member.service;

import com.ssafy.twinklebank.auth.provider.JwtTokenProvider;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.global.exception.exceptions.category.UnAuthorizedException;
import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;
import com.ssafy.twinklebank.member.data.response.AuthInfoFindResponse;
import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.member.repository.MemberRepository;
import com.ssafy.twinklebank.member.utils.MemberUtils;
import io.jsonwebtoken.Claims;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberSaveService, MemberLoadService {

	private final MemberRepository memberRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtTokenProvider jwtTokenProvider;
	private final StringRedisTemplate redisTemplate;

	@Override
	@Transactional
	public Map<String, String> join(MemberJoinRequest request) {
		// TODO: 중복 아이디 체킹

		String encodedPassword = passwordEncoder.encode(request.password());
		String uuid = UUID.randomUUID().toString();

		Member member = Member.builder()
			.name(request.name())
			.uuid(uuid)
			.gender(request.gender())
			.birth(request.birth())
			.password(encodedPassword)
			.username(request.username())
			.build();

		member = memberRepository.save(member);

		Map<String, String> response = new HashMap<>();
		response.put("username", member.getUsername());
		response.put("name", member.getName());

		return response;
	}

	@Override
	public void logout(long memberId, String accessToken) {
		// delete refresh token
		if (redisTemplate.opsForValue().get("refresh:" + memberId) != null) {
			redisTemplate.delete("refresh:" + memberId);
		}

		// add access token to a blacklist
		redisTemplate.opsForValue().set(
				"blacklist:" + accessToken, accessToken,
				jwtTokenProvider.getACCESS_TOKEN_EXPIRE_TIME(),
				TimeUnit.MILLISECONDS
		);
	}

	@Override
	public AuthInfoFindResponse findAuthInfo(long memberId) {
		// find auth info & return
		return memberRepository.findAuthInfoById(memberId)
			.orElseThrow(() -> new NotFoundException("AuthInfoFind", UNDEFINED_MEMBER, memberId));
	}

	@Override
	public Map<String, String> reissue(String refreshToken) {

		// 1. refreshtoken이 null이 아닌지 확인한다
		if (refreshToken == null) {
			throw new NotFoundException("MemberServiceImpl", REFRESH_NOT_FOUND);
		}

		// 2. 존재한다면 복호화 후 claims 객체를 파싱해온다
		Claims claims = jwtTokenProvider.parseClaims(refreshToken);
		// 3. claims에서 저장한 id를 가져온다
		Long id = Long.valueOf(claims.get("id").toString());

		// 4. redis에서 key를 refresh:id 로 갖고 있는 refreshToken을 조회한다.
		// 5. 조회한 token과 요청으로 받은 token이 동일한지 검증한다

		// refresh token이 만료된 경우
		if (isRefreshTokenExpired(id)) {
			throw new UnAuthorizedException("MemberServiceImpl : ", EXPIRED_TOKEN);
		}

		// 비정상적인 접근으로 refresh token이 일치하지 않는 경우
		if (!isValidRefreshToken(refreshToken, id)) {
			throw new UnAuthorizedException("MemberServiceImpl : ", UNAUTHORIZED_REFRESH);
		}

		// 6. 동일하다면 access token을 생성해 전달한다.
		Member member = MemberUtils.getMember(memberRepository, id);

		Authentication authentication =
			new UsernamePasswordAuthenticationToken(member.getUsername(), member.getPassword(),
				Collections.singleton(new SimpleGrantedAuthority("AUTHORITY")));

		Map<String, String> tokenMap = jwtTokenProvider.generateToken(member.getId(), member.getUuid(), authentication);

		// refresh token redis에 저장
		saveTokenRedis(member, tokenMap);

		return tokenMap;
	}

	private boolean isRefreshTokenExpired(Long id) {
		return redisTemplate.opsForValue().get("refresh:" + id) == null;
	}

	private boolean isValidRefreshToken(String refreshToken, Long id) {
		return refreshToken.equals(redisTemplate.opsForValue().get("refresh:" + id));
	}

	private void saveTokenRedis(Member member, Map<String, String> tokenMap) {
		redisTemplate.opsForValue()
			.set("refresh:" + member.getId(), tokenMap.get("refresh"),
				jwtTokenProvider.getREFRESH_TOKEN_EXPIRE_TIME(), TimeUnit.MILLISECONDS);
	}

}
