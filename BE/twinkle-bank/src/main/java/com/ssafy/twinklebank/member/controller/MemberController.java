package com.ssafy.twinklebank.member.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.twinklebank.global.data.response.ApiResponse;
import com.ssafy.twinklebank.global.data.response.StatusCode;
import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;
import com.ssafy.twinklebank.member.service.MemberSaveService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member/v1/members")
public class MemberController {
	private final MemberSaveService memberSaveService;

	@PostMapping("/join")
	public ResponseEntity<ApiResponse<Map<String, String>>> join(@RequestBody MemberJoinRequest request) {
		Map<String, String> memberResponse = memberSaveService.join(request);
		return ApiResponse.toResponseEntity(HttpStatus.CREATED, StatusCode.SUCCESS_JOIN, memberResponse);
	}
}
