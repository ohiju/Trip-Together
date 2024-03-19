package com.ssafy.triptogether.auth.controller;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.service.AuthLoadService;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.global.data.response.StatusCode;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/member/v1/auth")
@RequiredArgsConstructor
public class AuthController {
	// Service
	private final AuthLoadService authLoadService;

	@PostMapping("/pin/verify")
	public ResponseEntity<ApiResponse<Void>> pinVerify(
		@RequestBody @Valid PinVerifyRequest pinVerifyRequest
	) {
		// TODO: 인증 객체 생성 후 member_id 추출
		authLoadService.pinVerify(1L, pinVerifyRequest);

		return ApiResponse.emptyResponse(
			HttpStatus.OK, StatusCode.SUCCESS_PIN_VERIFY
		);
	}
}
