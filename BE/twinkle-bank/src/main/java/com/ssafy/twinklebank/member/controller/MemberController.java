package com.ssafy.twinklebank.member.controller;

import com.ssafy.twinklebank.application.domain.Application;
import com.ssafy.twinklebank.application.repository.ApplicationRepository;
import com.ssafy.twinklebank.application.utils.ApplicationUtils;
import com.ssafy.twinklebank.auth.data.response.TokenResponse;
import com.ssafy.twinklebank.auth.provider.CookieProvider;
import com.ssafy.twinklebank.auth.utils.SecurityMember;
import com.ssafy.twinklebank.auth.utils.SecurityUtil;
import com.ssafy.twinklebank.global.data.response.ApiResponse;
import com.ssafy.twinklebank.global.data.response.StatusCode;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;
import com.ssafy.twinklebank.member.data.response.AuthInfoFindResponse;
import com.ssafy.twinklebank.member.service.MemberLoadService;
import com.ssafy.twinklebank.member.service.MemberSaveService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.ssafy.twinklebank.global.data.response.StatusCode.*;
import static com.ssafy.twinklebank.global.exception.response.ErrorCode.COOKIE_NOT_FOUND;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member/v1/members")
public class MemberController {

	private final MemberSaveService memberSaveService;
	private final MemberLoadService memberLoadService;
	private final ApplicationRepository applicationRepository;
	private final CookieProvider cookieProvider;

	@PostMapping("/join")
	public ResponseEntity<ApiResponse<Map<String, String>>> join(@RequestBody @Valid MemberJoinRequest request) {
		Map<String, String> memberResponse = memberSaveService.join(request);
		return ApiResponse.toResponseEntity(HttpStatus.CREATED, StatusCode.SUCCESS_JOIN, memberResponse);
	}

	@PostMapping("/logout")
	public ResponseEntity<ApiResponse<Void>> logout(
			@AuthenticationPrincipal SecurityMember securityMember,
			HttpServletRequest request
	) {
		long memberId = securityMember.getId();
		String accessToken = SecurityUtil.getAccessToken(request);
		memberSaveService.logout(memberId, accessToken);
		return ApiResponse.emptyResponse(OK, SUCCESS_LOGOUT);
	}

	@GetMapping
	public ResponseEntity<ApiResponse<AuthInfoFindResponse>> findAuthInfo(
			@AuthenticationPrincipal SecurityMember securityMember
	) {
		long memberId = securityMember.getId();
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
		Cookie cookie = cookieProvider.getCookie(request, "refreshToken").orElseThrow(
			() -> new NotFoundException("MemberController", COOKIE_NOT_FOUND));

		String refreshToken = cookie.getValue();
		Map<String, String> tokenMap = memberLoadService.reissue(refreshToken);

		refreshToken = tokenMap.get("refresh");
		// refresh token은 헤더에 쿠키에 다시 넣어준다
		ResponseCookie newCookie = cookieProvider.createCookie(refreshToken);

		// 쿠키를 담을 헤더 생성
		HttpHeaders headers = cookieProvider.addCookieHttpHeaders(newCookie);

		// ApiResponse 객체 생성
		ApiResponse<TokenResponse> apiResponse = getApiResponse(tokenMap);

		// ResponseEntity에 헤더와 함께 ApiResponse 객체를 담아 반환
		return ResponseEntity
			.status(HttpStatus.OK)
			.headers(headers)
			.body(apiResponse);
	}

	private static ApiResponse<TokenResponse> getApiResponse(Map<String, String> tokenMap) {
		return ApiResponse.<TokenResponse>builder()
			.status(SUCCESS_REISSUE.getStatus())
			.message(SUCCESS_REISSUE.getMessage())
			.data(new TokenResponse(tokenMap.get("access")))
			.build();
	}

}
