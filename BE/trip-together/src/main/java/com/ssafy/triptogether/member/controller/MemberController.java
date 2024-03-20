package com.ssafy.triptogether.member.controller;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.member.data.PinSaveRequest;
import com.ssafy.triptogether.member.data.PinUpdateRequest;
import com.ssafy.triptogether.member.data.ProfileFindResponse;
import com.ssafy.triptogether.member.data.ProfileUpdateRequest;
import com.ssafy.triptogether.member.service.MemberLoadService;
import com.ssafy.triptogether.member.service.MemberSaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.CREATED;
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

    @GetMapping("/members/{member_id}")
    public ResponseEntity<ApiResponse<ProfileFindResponse>> findProfile(
            @PathVariable("member_id") long memberId
    ) {
        ProfileFindResponse response = memberLoadService.findProfile(memberId);
        return ApiResponse.toResponseEntity(OK, SUCCESS_PROFILE_FIND, response);
    }

    @PostMapping("/members/pin")
    public ResponseEntity<ApiResponse<Void>> savePin(
            // @AuthenticationPrincipal 인증객체 주입받기
            @RequestBody PinSaveRequest pinSaveRequest
    ) {
        // long memberId = 인증객체.getId(); TODO: 시큐리티 인증객체 주입받기
        long memberId = 1L;
        memberSaveService.savePin(memberId, pinSaveRequest);
        return ApiResponse.emptyResponse(CREATED, SUCCESS_PIN_SAVE);
    }

    @PatchMapping("/members/pin")
    public ResponseEntity<ApiResponse<Void>> updatePin(
            // @AuthenticationPrincipal 인증객체 주입받기
            @RequestBody PinUpdateRequest pinUpdateRequest
    ) {
        // long memberId = 인증객체.getId(); TODO: 시큐리티 인증객체 주입받기
        long memberId = 1L;
        memberSaveService.updatePin(memberId, pinUpdateRequest);
        return ApiResponse.emptyResponse(OK, SUCCESS_PIN_UPDATE);
    }
}
