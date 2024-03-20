package com.ssafy.twinklebank.member.controller;

import com.ssafy.twinklebank.global.data.response.ApiResponse;
import com.ssafy.twinklebank.member.data.AuthInfoFindResponse;
import com.ssafy.twinklebank.member.service.MemberLoadService;
import com.ssafy.twinklebank.member.service.MemberSaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.twinklebank.global.data.response.StatusCode.SUCCESS_AUTH_INFO_FIND;
import static org.springframework.http.HttpStatus.OK;

@RequiredArgsConstructor
@RequestMapping("/member/v1")
@RestController
public class MemberController {

    private final MemberSaveService memberSaveService;
    private final MemberLoadService memberLoadService;

    @GetMapping("/members")
    public ResponseEntity<ApiResponse<AuthInfoFindResponse>> findAuthInfo(
            // @AuthenticationPrincipal 인증객체 주입받기
    ) {
        // String memberUuid = 인증객체.getId(); TODO: 시큐리티 인증객체 주입받기
        String memberUuid = "temp";
        AuthInfoFindResponse response = memberLoadService.findAuthInfo(memberUuid);
        return ApiResponse.toResponseEntity(OK, SUCCESS_AUTH_INFO_FIND, response);
    }
}
