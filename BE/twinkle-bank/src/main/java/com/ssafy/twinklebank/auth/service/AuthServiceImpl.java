package com.ssafy.twinklebank.auth.service;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.ssafy.twinklebank.auth.data.request.TokenRequest;
import com.ssafy.twinklebank.auth.utils.JwtTokenProvider;
import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.member.utils.MemberUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthLoadService, AuthSaveService {
	private final MemberUtils memberUtils;
	private final JwtTokenProvider jwtTokenProvider;
	private final StringRedisTemplate redisTemplate;

	public Map<String, String> getToken(TokenRequest request) {

		Member member = memberUtils.getMember(request.username(), request.password());
		Authentication authentication =
			new UsernamePasswordAuthenticationToken(request.username(), request.password(),
				Collections.singleton(new SimpleGrantedAuthority("AUTHORITY")));

		Map<String, String> tokenMap = jwtTokenProvider.generateToken(member.getId(), authentication);

		// refresh token redis에 저장
		redisTemplate.opsForValue()
			.set("refresh:" + member.getId(), tokenMap.get("refresh"),
				jwtTokenProvider.getREFRESH_TOKEN_EXPIRE_TIME(), TimeUnit.MICROSECONDS);
		return tokenMap;
	}
}
