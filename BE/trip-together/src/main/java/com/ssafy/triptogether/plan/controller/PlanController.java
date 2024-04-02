package com.ssafy.triptogether.plan.controller;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.*;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.plan.data.request.PlansSaveRequest;
import com.ssafy.triptogether.plan.data.response.DailyPlansResponse;
import com.ssafy.triptogether.plan.data.response.PlanDetailFindResponse;
import com.ssafy.triptogether.plan.service.PlanLoadService;
import com.ssafy.triptogether.plan.service.PlanSaveService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/plan/v1/plans")
@RequiredArgsConstructor
public class PlanController {
    private final PlanSaveService planSaveService;
    private final PlanLoadService planLoadService;

	@GetMapping
	public ResponseEntity<ApiResponse<DailyPlansResponse>> findMyPlans(
		@AuthenticationPrincipal SecurityMember securityMember
	) {
		long memberId = securityMember.getId();
		DailyPlansResponse planList = planLoadService.findPlans(memberId);
		return ApiResponse.toResponseEntity(OK, SUCCESS_PLAN_DETAIL_FIND, planList);
	}

	@GetMapping("/{member_id}")
	public ResponseEntity<ApiResponse<DailyPlansResponse>> findPlans(
		@PathVariable("member_id") long memberId
	) {
		DailyPlansResponse response = planLoadService.findPlans(memberId);
		return ApiResponse.toResponseEntity(OK, SUCCESS_PLAN_DETAIL_FIND, response);
	}

	@PostMapping
	public ResponseEntity<ApiResponse<Long>> plansSave(
		@AuthenticationPrincipal SecurityMember securityMember,
		@RequestBody @Valid PlansSaveRequest plansSaveRequest
	) {
		long memberId = securityMember.getId();
		long planId = planSaveService.plansSave(memberId, plansSaveRequest);

		return ApiResponse.toResponseEntity(CREATED, SUCCESS_PLANS_SAVE, planId);
    }

	@DeleteMapping("/{plan_id}")
	public ResponseEntity<ApiResponse<Void>> planDelete(
		@AuthenticationPrincipal SecurityMember securityMember,
		@PathVariable("plan_id") Long planId
	) {
		long memberId = securityMember.getId();
		planSaveService.planDelete(memberId, planId);
		return ApiResponse.emptyResponse(NO_CONTENT, SUCCESS_PLAN_DELETE);
	}

	@PatchMapping("/{plan_id}")
	public ResponseEntity<ApiResponse<Void>> planModify(
		@AuthenticationPrincipal SecurityMember securityMember,
		@PathVariable("plan_id") Long planId,
		@RequestBody PlansSaveRequest plansSaveRequest
	) {
		long memberId = securityMember.getId();
		planSaveService.planModify(memberId, planId, plansSaveRequest);
		return ApiResponse.emptyResponse(OK, SUCCESS_PLANS_MODIFY);
	}

	@GetMapping("/{plan_id}")
	public ResponseEntity<ApiResponse<PlanDetailFindResponse>> findPlanDetail(
		@PathVariable("plan_id") long planId
	) {
		PlanDetailFindResponse response = planLoadService.findPlanDetail(planId);
		return ApiResponse.toResponseEntity(OK, SUCCESS_PLAN_DETAIL_FIND, response);
	}
}
