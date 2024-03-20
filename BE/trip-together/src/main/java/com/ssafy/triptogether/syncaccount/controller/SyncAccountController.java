package com.ssafy.triptogether.syncaccount.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.global.data.response.StatusCode;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.service.SyncAccountLoadService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/account/v1/sync-account")
@RequiredArgsConstructor
public class SyncAccountController {
	// Service
	private final SyncAccountLoadService syncAccountLoadService;

	@GetMapping("/sync-accounts")
	public ResponseEntity<ApiResponse<SyncAccountsLoadResponse>> syncAccountsLoad() {
		SyncAccountsLoadResponse syncAccountsLoadResponse = syncAccountLoadService.syncAccountsLoad(1L);

		return ApiResponse.toResponseEntity(
			HttpStatus.OK, StatusCode.SUCCESS_SYNC_ACCOUNTS_LOAD, syncAccountsLoadResponse
		);
	}
}
