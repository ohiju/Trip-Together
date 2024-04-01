package com.ssafy.triptogether.flashmob.controller;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.flashmob.data.request.ApplyFlashmobRequest;
import com.ssafy.triptogether.flashmob.data.request.SettlementSaveRequest;
import com.ssafy.triptogether.flashmob.data.response.AttendeeReceiptsResponse;
import com.ssafy.triptogether.flashmob.data.response.AttendeesStatusResponse;
import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobListFindResponse;
import com.ssafy.triptogether.flashmob.data.response.FlashMobMembersLoadResponse;
import com.ssafy.triptogether.flashmob.data.response.SettlementsLoadResponse;
import com.ssafy.triptogether.flashmob.service.FlashMobLoadService;
import com.ssafy.triptogether.flashmob.service.FlashMobSaveService;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.global.data.response.StatusCode;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api/flashmob/v1")
@RequiredArgsConstructor
public class FlashMobController {

    private final FlashMobSaveService flashMobSaveService;
    private final FlashMobLoadService flashMobLoadService;

    @PostMapping("/flashmobs/{flashmob_id}")
    public ResponseEntity<ApiResponse<Void>> sendAttendanceRequest(
        @PathVariable("flashmob_id") long flashmobId,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.sendAttendanceRequest(flashmobId, memberId);
        return ApiResponse.emptyResponse(CREATED, SUCCESS_FLASHMOB_REQUEST);
    }

    @GetMapping("/flashmobs")
    public ResponseEntity<ApiResponse<AttendingFlashmobListFindResponse>> findAttendingFlashmobList(
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        AttendingFlashmobListFindResponse response = flashMobLoadService.findAttendingFlashmobList(memberId);
        return ApiResponse.toResponseEntity(OK, SUCCESS_FLASHMOB_LIST_FIND, response);
    }

    @PatchMapping("/flashmobs/{flashmob_id}")
    public ResponseEntity<ApiResponse<Void>> checkDeniedFlashmob(
        @PathVariable("flashmob_id") long flashmobId,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.checkDeniedFlashmob(flashmobId, memberId);
        return ApiResponse.emptyResponse(OK, SUCCESS_FLASHMOB_DENIED_CHECK);
    }

    @DeleteMapping("/flashmobs/{flashmob_id}")
    public ResponseEntity<ApiResponse<Void>> cancelFlashmob(
        @PathVariable("flashmob_id") long flashmobId,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.cancelFlashmob(flashmobId, memberId);
        return ApiResponse.emptyResponse(NO_CONTENT, SUCCESS_FLASHMOB_CANCEL);
    }

    @GetMapping("/flashmobs/{flashmob_id}/members")
    public ResponseEntity<ApiResponse<FlashMobMembersLoadResponse>> flashmobMembersLoad(
        @PathVariable("flashmob_id") long flashmobId,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        FlashMobMembersLoadResponse flashMobMembersLoadResponse = flashMobLoadService.flashmobMembersLoad(memberId,
            flashmobId);

        return ApiResponse.toResponseEntity(
            OK, SUCCESS_FLASHMOB_MEMBER_LOAD, flashMobMembersLoadResponse
        );
    }

    @PatchMapping("/flashmobs/{flashmob_id}/{member_id}")
    public ResponseEntity<ApiResponse<Void>> applyFlashmob(
        @PathVariable("flashmob_id") long flashmobId,
        @PathVariable("member_id") long memberId,
        @RequestBody ApplyFlashmobRequest applyFlashmobRequest,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        boolean isAccepted = flashMobSaveService.applyFlashmob(flashmobId, memberId, applyFlashmobRequest, securityMember.getId());
        return ApiResponse.emptyResponse(OK,
            isAccepted ? SUCCESS_APPLY_ACCEPT : SUCCESS_APPLY_DENY);
    }

    @DeleteMapping("/flashmobs/{flashmob_id}/exit")
    public ResponseEntity<ApiResponse<Void>> exitFlashmob(
        @AuthenticationPrincipal SecurityMember securityMember,
        @PathVariable("flashmob_id") long flashmobId
    ) {
        flashMobSaveService.exitFlashmob(new SecurityMember(), flashmobId);
        return ApiResponse.emptyResponse(OK, SUCCESS_FLASHMOB_QUIT);
    }

    @PostMapping("/flashmobs/{flashmob_id}/settlements")
    public ResponseEntity<ApiResponse<Void>> settlementSave(
        @AuthenticationPrincipal SecurityMember securityMember,
        @PathVariable("flashmob_id") long flashmobId,
        @RequestBody @Valid SettlementSaveRequest settlementSaveRequest
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.settlementSave(memberId, flashmobId, settlementSaveRequest);

        return ApiResponse.emptyResponse(CREATED, SUCCESS_SETTLEMENT_SAVE);
    }

    @GetMapping("/flashmobs/{flashmob_id}/settlements")
    public ResponseEntity<ApiResponse<SettlementsLoadResponse>> settlementsLoad(
        @AuthenticationPrincipal SecurityMember securityMember,
        @PathVariable("flashmob_id") long flashmobId
    ) {
        long memberId = securityMember.getId();
        SettlementsLoadResponse settlementsLoadResponse = flashMobLoadService.settlementsLoad(memberId, flashmobId);

        return ApiResponse.toResponseEntity(
            OK, SUCCESS_SETTLEMENTS_LOAD, settlementsLoadResponse
        );
    }

    @GetMapping("/flashmobs/{flashmob_id}/settlements/{settlement_id}/receipt")
    public ResponseEntity<ApiResponse<AttendeeReceiptsResponse>> receiptsLoad(
        @AuthenticationPrincipal SecurityMember securityMember,
        @PathVariable("flashmob_id") long flashmobId,
        @PathVariable("settlement_id") long settlementId
    ) {
        long memberId = securityMember.getId();
        AttendeeReceiptsResponse attendeeReceiptsResponse = flashMobLoadService.receiptsLoad(memberId, flashmobId,
            settlementId);

        return ApiResponse.toResponseEntity(
            OK, SUCCESS_RECEIPTS_LOAD, attendeeReceiptsResponse
        );
    }

    @GetMapping("/flashmobs/{flashmob_id}/settlements/{settlement_id}")
    public ResponseEntity<ApiResponse<AttendeesStatusResponse>> attendeesStatusLoad(
        @AuthenticationPrincipal SecurityMember securityMember,
        @PathVariable("flashmob_id") long flashmobId,
        @PathVariable("settlement_id") long settlementId
    ) {
        long memberId = securityMember.getId();
        AttendeesStatusResponse attendeesStatusResponse = flashMobLoadService.attendeesStatusLoad(memberId, flashmobId,
            settlementId);

        return ApiResponse.toResponseEntity(
            OK, SUCCESS_ATTENDEES_STATUS_LOAD, attendeesStatusResponse
        );
    }

    @PostMapping("/flashmobs/{flashmob_id}/settlemetns/{settlement_id}")
    public ResponseEntity<ApiResponse<Void>> settlementSend(
        @AuthenticationPrincipal SecurityMember securityMember,
        @PathVariable("flashmob_id") long flashmobId,
        @PathVariable("settlement_id") long settlementId,
        @RequestBody @Valid PinVerifyRequest pinVerifyRequest
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.settlementSend(memberId, flashmobId, settlementId, pinVerifyRequest);

        return ApiResponse.emptyResponse(
            OK, SUCCESS_SETTLEMENT_SEND
        );
    }

    @DeleteMapping("/flashmobs/{flashmob_id}/settlements/{settlement_id}")
    public ResponseEntity<ApiResponse<Void>> settlementDelete(
        @AuthenticationPrincipal SecurityMember securityMember,
        @PathVariable("flashmob_id") long flashmobId,
        @PathVariable("settlement_id") long settlementId
    ) {
        long memberId = securityMember.getId();
        flashMobSaveService.settlementDelete(memberId, flashmobId, settlementId);

        return ApiResponse.emptyResponse(
            NO_CONTENT, SUCCESS_SETTLEMENT_DELETE
        );
    }
}
