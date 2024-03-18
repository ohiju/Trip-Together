package com.ssafy.triptogether.member.controller;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.member.data.ProfileUpdateRequest;
import com.ssafy.triptogether.member.service.MemberLoadService;
import com.ssafy.triptogether.member.service.MemberSaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.triptogether.global.data.response.StatusCode.SUCCESS_PROFILE_UPDATE;
import static org.springframework.http.HttpStatus.OK;

@RequiredArgsConstructor
@RequestMapping("/member/v1")
@RestController
public class MemberController {

    private final MemberSaveService memberSaveService;
    private final MemberLoadService memberLoadService;

    @PatchMapping("/members")
    public ResponseEntity<ApiResponse<Void>> updateProfile(
            // @AuthenticationPrincipal 인증객체 주입받기
            @RequestBody ProfileUpdateRequest profileUpdateRequest
    ) {
        // long memberId = 인증객체.getId(); TODO: 시큐리티 인증객체 주입받기
        long memberId = 1L;
        memberSaveService.updateProfile(memberId, profileUpdateRequest);
        return ApiResponse.emptyResponse(OK, SUCCESS_PROFILE_UPDATE);
    }
}
