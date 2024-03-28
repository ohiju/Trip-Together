package com.ssafy.triptogether.flashmob.controller;

import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobListFindResponse;
import com.ssafy.triptogether.flashmob.service.FlashMobLoadService;
import com.ssafy.triptogether.flashmob.service.FlashMobSaveService;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/flashmob/v1/flashmobs")
@RequiredArgsConstructor
public class FlashMobController {

    private final FlashMobSaveService flashMobSaveService;
    private final FlashMobLoadService flashMobLoadService;

    @PostMapping("/{flashmob_id}")
    public ResponseEntity<ApiResponse<Void>> sendAttendanceRequest(
        @PathVariable("flashmob_id") long flashmobId,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.sendAttendanceRequest(flashmobId, memberId);
        return ApiResponse.emptyResponse(CREATED, SUCCESS_FLASHMOB_REQUEST);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<AttendingFlashmobListFindResponse>> findAttendingFlashmobList(
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        AttendingFlashmobListFindResponse response = flashMobLoadService.findAttendingFlashmobList(memberId);
        return ApiResponse.toResponseEntity(OK, SUCCESS_FLASHMOB_LIST_FIND, response);
    }

    @PatchMapping("/{flashmob_id}")
    public ResponseEntity<ApiResponse<Void>> checkDeniedFlashmob(
        @PathVariable("flashmob_id") long flashmobId,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.checkDeniedFlashmob(flashmobId, memberId);
        return ApiResponse.emptyResponse(OK, SUCCESS_FLASHMOB_DENIED_CHECK);
    }
}
