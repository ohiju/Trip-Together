package com.ssafy.triptogether.auth.provider;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@Slf4j
public class CookieProvider {
    public ResponseCookie createCookie(String refreshToken) {
        return ResponseCookie.from("refreshToken", refreshToken)
                .maxAge(7 * 24 * 60 * 60)
                .path("/") // 쿠키 헤더를 전송하기 위해 요청되는 url내에서 반드시 존재해야하는 url 경로
                .secure(true) // https를 통해서만 쿠키를 전송
                .sameSite("None") // 서로 다른 도메인간(cross-site)의 모든 쿠키 전송 가능하도록 설정
                .httpOnly(true) // cross-site 스크립팅 공격을 방지하기위한 옵션 (클라이언트에서 js로 접근불가)
                .build();
    }

    public Optional<Cookie> getCookie(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (name.equals(cookie.getName())) {
                    return Optional.of(cookie);
                }
            }
        }
        return Optional.empty();
    }

    public HttpHeaders addCookieHttpHeaders(ResponseCookie cookie) {
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.SET_COOKIE, cookie.toString());
        return headers;
    }
}
