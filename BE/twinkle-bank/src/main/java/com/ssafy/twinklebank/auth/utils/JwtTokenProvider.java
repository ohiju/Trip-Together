package com.ssafy.twinklebank.auth.utils;

import java.security.Key;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtTokenProvider {
	// 은행의 access token의 유효 시간 : 5분
	// 은행의 refresh token의 유효 시간 : 7일
	@Getter
	private final long ACCESS_TOKEN_EXPIRE_TIME = 30 * 60 * 1000L; // 30분
	@Getter
	private final long REFRESH_TOKEN_EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000L; // 7일

	// security Key
	private final Key key;

	public JwtTokenProvider(@Value("${jwt.secret}") String key) {
		byte[] keyBytes = Decoders.BASE64.decode(key);
		this.key = Keys.hmacShaKeyFor(keyBytes);
	}

	// Member 정보를 가지고 AccessToken, RefreshToken을 생성
	public Map<String, String> generateToken(long id, Authentication authentication) {
		SecurityMember securityMember = new SecurityMember(
			id,
			(String)authentication.getPrincipal(),
			(String)authentication.getCredentials()
		);

		String authorities = securityMember.getAuthorities().stream()
			.map(GrantedAuthority::getAuthority)
			.collect(Collectors.joining(","));

		// access token 발급
		long now = (new Date()).getTime();
		Date accessTokenExpireIn = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);
		String accessToken = Jwts.builder()
			.setSubject(authentication.getName())
			.claim("auth", authorities)
			.claim("id", id)
			.setExpiration(accessTokenExpireIn)
			.signWith(key, SignatureAlgorithm.HS256)
			.compact();

		log.info("access token : " + accessToken);

		// refresh token 발급
		Date refreshTokenExpireIn = new Date(now + REFRESH_TOKEN_EXPIRE_TIME);
		String refreshToken = Jwts.builder()
			.setExpiration(refreshTokenExpireIn)
			.signWith(key, SignatureAlgorithm.HS256)
			.compact();

		HashMap<String, String> map = new HashMap<>();
		map.put("access", SecurityUtil.getTokenPrefix() + " " + accessToken);
		map.put("refresh", SecurityUtil.getTokenPrefix() + " " + refreshToken);
		return map;
	}

	// access token을 복호하하여 토큰에 들어있는 정보를 꺼내는 메소드
	public Authentication getAuthentication(String accessToken) {
		// 토큰 복호화
		Claims claims = parseClaims(accessToken);

		if (claims.get("auth") == null) {
			// TODO : 에러 처리 다시 하기
			throw new RuntimeException("권한 정보가 없는 토큰임");
		}

		// TODO : authentication 을 만들어서 getName을 설정하는 부분이 완료되면 다시 작성하기
		// 사용자 이름으로 로그인한 유저 정보 가져오기
		String name = claims.getSubject();
		// SecurityMember securityMember =

		List<SimpleGrantedAuthority> authorities = Arrays.stream(claims.get("auth").toString().split(","))
			.map(SimpleGrantedAuthority::new)
			.collect(Collectors.toList());

		// return new UsernamePasswordAuthenticationToken(securityUser, "", authorities);
		return null;
	}

	// 토큰 정보를 검증하는 메서드
	public boolean validateToken(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
			return true;
		} catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
			log.info("Invalid JWT Token", e);
			throw e;
		} catch (ExpiredJwtException e) {
			log.info("Expired JWT Token", e);
			throw e;
		} catch (UnsupportedJwtException e) {
			log.info("Unsupported JWT Token", e);
			throw e;
		} catch (IllegalArgumentException e) {
			log.info("JWT claims string is empty.", e);
		}
		return false;
	}

	private Claims parseClaims(String accessToken) {
		try {
			return Jwts.parserBuilder()
				.setSigningKey(key)
				.build()
				.parseClaimsJws(accessToken)
				.getBody();
		} catch (ExpiredJwtException e) {
			return e.getClaims();
		}
	}
}
