package com.ssafy.triptogether.flashmob.controller;

import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.flashmob.service.FlashMobSaveService;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.triptogether.global.data.response.StatusCode.SUCCESS_FLASHMOB_REQUEST;
import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/flashmob/v1/flashmobs")
@RequiredArgsConstructor
public class FlashMobController {

    private final FlashMobSaveService flashMobSaveService;

    @PostMapping("/{flashmob_id}")
    public ResponseEntity<ApiResponse<Void>> sendAttendanceRequest(
        @PathVariable("flashmob_id") long flashmobId,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.sendAttendanceRequest(flashmobId, memberId);
        return ApiResponse.emptyResponse(CREATED, SUCCESS_FLASHMOB_REQUEST);
    }
}
