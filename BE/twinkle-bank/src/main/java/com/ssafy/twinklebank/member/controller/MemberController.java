package com.ssafy.twinklebank.member.controller;

import com.ssafy.twinklebank.application.domain.Application;
import com.ssafy.twinklebank.application.repository.ApplicationRepository;
import com.ssafy.twinklebank.application.utils.ApplicationUtils;
import com.ssafy.twinklebank.auth.data.response.TokenResponse;
import com.ssafy.twinklebank.global.data.response.ApiResponse;
import com.ssafy.twinklebank.global.data.response.StatusCode;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;
import com.ssafy.twinklebank.member.data.response.AuthInfoFindResponse;
import com.ssafy.twinklebank.member.service.MemberLoadService;
import com.ssafy.twinklebank.member.service.MemberSaveService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static com.ssafy.twinklebank.global.data.response.StatusCode.*;
import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member/v1/members")
public class MemberController {

	private final MemberSaveService memberSaveService;
	private final MemberLoadService memberLoadService;
	private final ApplicationRepository applicationRepository;

	@PostMapping("/join")
	public ResponseEntity<ApiResponse<Map<String, String>>> join(@RequestBody MemberJoinRequest request) {
		Map<String, String> memberResponse = memberSaveService.join(request);
		return ApiResponse.toResponseEntity(HttpStatus.CREATED, StatusCode.SUCCESS_JOIN, memberResponse);
	}

	@GetMapping
	public ResponseEntity<ApiResponse<AuthInfoFindResponse>> findAuthInfo(
		// @AuthenticationPrincipal 인증객체 주입받기
	) {
		// String memberId = 인증객체.getId(); TODO: 시큐리티 인증객체 주입받기
		long memberId = 1L;
		AuthInfoFindResponse response = memberLoadService.findAuthInfo(memberId);
		return ApiResponse.toResponseEntity(OK, SUCCESS_AUTH_INFO_FIND, response);
	}

	@GetMapping("/reissue")
	public ResponseEntity<ApiResponse<TokenResponse>> reissue(
		HttpServletRequest request,
		@RequestParam(value = "client_id") String clientId
	) {

		// 1. client id로 여행이 맞는지 확인 -> application이 없으면 getApplication에서 에러남
		Application application = ApplicationUtils.getApplication(applicationRepository, clientId);

		// 쿠키에서 refresh token 꺼내기
		Cookie cookie = getCookie(request, "refreshToken").orElseThrow(
			() -> new NotFoundException("MemberController", COOKIE_NOT_FOUND));

		String refreshToken = cookie.getValue();
		Map<String, String> tokenMap = memberLoadService.reissue(refreshToken);

		refreshToken = tokenMap.get("refresh");
		// refresh token은 헤더에 쿠키에 다시 넣어준다
		ResponseCookie newCookie = getResponseCookie(refreshToken);

		// 쿠키를 담을 헤더 생성
		HttpHeaders headers = getHttpHeaders(newCookie);

		// ApiResponse 객체 생성
		ApiResponse<TokenResponse> apiResponse = getApiResponse(tokenMap);

		// ResponseEntity에 헤더와 함께 ApiResponse 객체를 담아 반환
		return ResponseEntity
			.status(HttpStatus.OK)
			.headers(headers)
			.body(apiResponse);
	}

	private static HttpHeaders getHttpHeaders(ResponseCookie newCookie) {
		HttpHeaders headers = new HttpHeaders();
		headers.add(HttpHeaders.SET_COOKIE, newCookie.toString());
		return headers;
	}

	private static ApiResponse<TokenResponse> getApiResponse(Map<String, String> tokenMap) {
		return ApiResponse.<TokenResponse>builder()
			.status(SUCCESS_REISSUE.getStatus())
			.message(SUCCESS_REISSUE.getMessage())
			.data(new TokenResponse(tokenMap.get("access")))
			.build();
	}

	private static ResponseCookie getResponseCookie(String refreshToken) {
		return ResponseCookie.from("refreshToken", refreshToken)
			.maxAge(7 * 24 * 60 * 60)
			.path("/") // 쿠키 헤더를 전송하기 위해 요청되는 url내에서 반드시 존재해야하는 url 경로
			.secure(true) // https를 통해서만 쿠키를 전송
			.sameSite("None") // 서로 다른 도메인간(cross-site)의 모든 쿠키 전송 가능하도록 설정
			.httpOnly(true) // cross-site 스크립팅 공격을 방지하기위한 옵션 (클라이언트에서 js로 접근불가)
			.build();
	}

	public static Optional<Cookie> getCookie(HttpServletRequest request, String name) {
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

}
