package com.ssafy.triptogether.plan.controller;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.plan.data.request.PlansSaveRequest;
import com.ssafy.triptogether.plan.data.response.DailyPlanListResponse;
import com.ssafy.triptogether.plan.data.response.PlanDetailFindResponse;
import com.ssafy.triptogether.plan.service.PlanLoadService;
import com.ssafy.triptogether.plan.service.PlanSaveService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/plan/v1/plans")
@RequiredArgsConstructor
public class PlanController {
    // Service
    private final PlanSaveService planSaveService;
    private final PlanLoadService planLoadService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<DailyPlanListResponse>>> findPlans(
        // @AuthenticationPrincipal SecurityMember
    ) {
        long memberId = 1L;
        List<DailyPlanListResponse> planList = planLoadService.findPlans(memberId);
        return ApiResponse.toResponseEntity(OK, SUCCESS_PLAN_DETAIL_FIND, planList);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Void>> plansSave(
        // @AuthenticationPrincipal SecurityMember
        @RequestBody @Valid PlansSaveRequest plansSaveRequest
    ) {
        // long memberId = securityMember.getId();
        long memberId = 1L;
        planSaveService.plansSave(memberId, plansSaveRequest);

        return ApiResponse.emptyResponse(CREATED, SUCCESS_PLANS_SAVE);
    }

    @DeleteMapping("/{plan_id}")
    public ResponseEntity<ApiResponse<Void>> planDelete(
        // @AuthenticationPrincipal SecurityMember
        @PathVariable("plan_id") Long planId
    ) {
        long memberId = 1L;
        planSaveService.planDelete(memberId, planId);
        return ApiResponse.emptyResponse(NO_CONTENT, SUCCESS_PLAN_DELETE);
    }

    @PatchMapping("/{plan_id}")
    public ResponseEntity<ApiResponse<Void>> planModify(
        // @AuthenticationPrincipal SecurityMember,
        @PathVariable("plan_id") Long planId,
        @RequestBody PlansSaveRequest plansSaveRequest
    ) {
        // long memberId = securityMember.getId();
        long memberId = 1L;
        planSaveService.planModify(memberId, planId, plansSaveRequest);
        return ApiResponse.emptyResponse(OK, SUCCESS_PLANS_SAVE);
    }

    @GetMapping("/{plan_id}")
    public ResponseEntity<ApiResponse<PlanDetailFindResponse>> findPlanDetail(
        @PathVariable("plan_id") long planId
    ) {
        PlanDetailFindResponse response = planLoadService.findPlanDetail(planId);
        return ApiResponse.toResponseEntity(OK, SUCCESS_PLAN_DETAIL_FIND, response);
    }
}
