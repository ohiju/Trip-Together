package com.ssafy.twinklebank.auth.service;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.twinklebank.auth.data.request.TokenRequest;
import com.ssafy.twinklebank.auth.provider.JwtTokenProvider;
import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.member.repository.MemberRepository;
import com.ssafy.twinklebank.member.utils.MemberUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthLoadService, AuthSaveService {
	private final MemberRepository memberRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtTokenProvider jwtTokenProvider;
	private final StringRedisTemplate redisTemplate;

	public Map<String, String> getToken(TokenRequest request) {

		Member member = MemberUtils.getMember(memberRepository, passwordEncoder, request.username(), request.password());
		Authentication authentication =
			new UsernamePasswordAuthenticationToken(request.username(), request.password(),
				Collections.singleton(new SimpleGrantedAuthority("AUTHORITY")));

		Map<String, String> tokenMap = jwtTokenProvider.generateToken(member.getId(), member.getUuid(),authentication);

		// refresh token redis에 저장
		System.out.println(jwtTokenProvider.getREFRESH_TOKEN_EXPIRE_TIME());
		redisTemplate.opsForValue()
			.set("refresh:" + member.getId(), tokenMap.get("refresh"),
				jwtTokenProvider.getREFRESH_TOKEN_EXPIRE_TIME(), TimeUnit.MILLISECONDS);
		return tokenMap;
	}
}
