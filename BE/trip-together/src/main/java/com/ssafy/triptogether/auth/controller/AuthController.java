package com.ssafy.triptogether.auth.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.auth.data.response.TokenResponse;
import com.ssafy.triptogether.auth.service.AuthServiceImpl;
import com.ssafy.triptogether.global.data.response.ApiResponse;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/member/v1/auth")
@RequiredArgsConstructor
public class AuthController {

	private final AuthServiceImpl authService;
	@Value("${app.clientId}")
	private String TWINKLE_CLIENT_ID;
	@Value("${app.secretKey}")
	private String TWINKLE_SECRET_KEY;

	@GetMapping("/token")
	public ResponseEntity<ApiResponse<TokenResponse>> getTripToken(@Valid @RequestParam(value = "code") String code) {
		return authService.getTripToken(code, TWINKLE_SECRET_KEY, TWINKLE_CLIENT_ID);
	}

}
