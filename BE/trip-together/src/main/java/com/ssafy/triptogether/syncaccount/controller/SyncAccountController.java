package com.ssafy.triptogether.syncaccount.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.global.data.response.StatusCode;
import com.ssafy.triptogether.syncaccount.data.request.MainSyncAccountUpdateRequest;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.service.SyncAccountLoadService;
import com.ssafy.triptogether.syncaccount.service.SyncAccountSaveService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/account/v1/sync-account")
@RequiredArgsConstructor
public class SyncAccountController {
	// Service
	private final SyncAccountLoadService syncAccountLoadService;
	private final SyncAccountSaveService syncAccountSaveService;

	@GetMapping("/sync-accounts")
	public ResponseEntity<ApiResponse<SyncAccountsLoadResponse>> syncAccountsLoad() {
		SyncAccountsLoadResponse syncAccountsLoadResponse = syncAccountLoadService.syncAccountsLoad(1L);

		return ApiResponse.toResponseEntity(
			HttpStatus.OK, StatusCode.SUCCESS_SYNC_ACCOUNTS_LOAD, syncAccountsLoadResponse
		);
	}

	@PatchMapping("/sync-accounts")
	public ResponseEntity<ApiResponse<Void>> mainSyncAccountUpdate(
		@RequestBody @Valid MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest
	) {
		syncAccountSaveService.mainSyncAccountUpdate(1L, mainSyncAccountUpdateRequest);

		return ApiResponse.emptyResponse(
			HttpStatus.OK, StatusCode.SUCCESS_MAIN_SYNC_ACCOUNT_UPDATE
		);
	}
}
