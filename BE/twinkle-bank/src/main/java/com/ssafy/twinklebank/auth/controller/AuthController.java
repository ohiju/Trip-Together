package com.ssafy.twinklebank.auth.controller;

import static com.ssafy.twinklebank.global.data.response.StatusCode.*;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.twinklebank.auth.data.request.TokenRequest;
import com.ssafy.twinklebank.auth.data.response.TokenResponse;
import com.ssafy.twinklebank.auth.service.AuthServiceImpl;
import com.ssafy.twinklebank.global.data.response.ApiResponse;

import java.util.Map;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/member/v1/oauth")
@RequiredArgsConstructor
public class AuthController {
	private final AuthServiceImpl authService;

	@PostMapping("/token")
	public ResponseEntity<ApiResponse<TokenResponse>> getToken(@RequestBody TokenRequest request) {

		Map<String, String> tokenMap = authService.getToken(request);
		String accessToken = tokenMap.get("access");
		String refreshToken = tokenMap.get("refresh");

		// refresh token은 헤더에 쿠키에 넣어준다
		ResponseCookie cookie = ResponseCookie.from("refreshToken", refreshToken)
			.maxAge(7 * 24 * 60 * 60)
			.path("/") // 쿠키 헤더를 전송하기 위해 요청되는 url내에서 반드시 존재해야하는 url 경로
			.secure(true) // https를 통해서만 쿠키를 전송
			.sameSite("None") // 서로 다른 도메인간(cross-site)의 모든 쿠키 전송 가능하도록 설정
			.httpOnly(true) // cross-site 스크립팅 공격을 방지하기위한 옵션 (클라이언트에서 js로 접근불가)
			.build();

		// 쿠키를 담을 헤더 생성
		HttpHeaders headers = new HttpHeaders();
		headers.add(HttpHeaders.SET_COOKIE, cookie.toString());

		// ApiResponse 객체 생성
		ApiResponse<TokenResponse> apiResponse = ApiResponse.<TokenResponse>builder()
			.status(SUCCESS_GENERATE_TOKEN.getStatus())
			.message(SUCCESS_GENERATE_TOKEN.getMessage())
			.data(new TokenResponse(accessToken))
			.build();

		// ResponseEntity에 헤더와 함께 ApiResponse 객체를 담아 반환
		return ResponseEntity
			.status(HttpStatus.OK)
			.headers(headers)
			.body(apiResponse);
	}

}
