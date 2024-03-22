package com.ssafy.triptogether.plan.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.global.data.response.StatusCode;
import com.ssafy.triptogether.plan.data.request.PlansSaveRequest;
import com.ssafy.triptogether.plan.service.PlanSaveService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/plan/v1")
@RequiredArgsConstructor
public class PlanController {
	// Service
	private final PlanSaveService planSaveService;

	@PostMapping("/plans")
	public ResponseEntity<ApiResponse<Void>> plansSave(
		@RequestBody @Valid PlansSaveRequest plansSaveRequest
	) {
		planSaveService.plansSave(1L, plansSaveRequest);

		return ApiResponse.emptyResponse(
			HttpStatus.CREATED, StatusCode.SUCCESS_PLANS_SAVE
		);
	}
}
