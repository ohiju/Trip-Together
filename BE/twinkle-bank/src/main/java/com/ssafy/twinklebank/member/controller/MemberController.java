package com.ssafy.twinklebank.member.controller;

import com.ssafy.twinklebank.global.data.response.ApiResponse;
import com.ssafy.twinklebank.global.data.response.StatusCode;
import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;
import com.ssafy.twinklebank.member.data.response.AuthInfoFindResponse;
import com.ssafy.twinklebank.member.service.MemberLoadService;
import com.ssafy.twinklebank.member.service.MemberSaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static com.ssafy.twinklebank.global.data.response.StatusCode.SUCCESS_AUTH_INFO_FIND;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member/v1/members")
public class MemberController {

	private final MemberSaveService memberSaveService;
    private final MemberLoadService memberLoadService;

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
}
