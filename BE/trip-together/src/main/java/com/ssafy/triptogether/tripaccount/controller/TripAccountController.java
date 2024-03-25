package com.ssafy.triptogether.tripaccount.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.global.data.response.StatusCode;
import com.ssafy.triptogether.tripaccount.data.response.AccountHistoriesLoadDetail;
import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.RateLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.TripAccountsLoadResponse;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;
import com.ssafy.triptogether.tripaccount.service.TripAccountLoadService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account/v1/trip-account")
@RequiredArgsConstructor
public class TripAccountController {
    // Service
    private final TripAccountLoadService tripAccountLoadService;

    @GetMapping("/currencies")
    public ResponseEntity<ApiResponse<CurrenciesLoadResponse>> currenciesLoad() {
        CurrenciesLoadResponse currenciesLoadResponse = tripAccountLoadService.currenciesLoad();

        return ApiResponse.toResponseEntity(
                HttpStatus.OK, StatusCode.SUCCESS_CURRENCY_LOAD, currenciesLoadResponse
        );
    }

    @GetMapping("/rate")
    public ResponseEntity<ApiResponse<RateLoadResponse>> rateLoad(
            @RequestParam("currency_code") CurrencyCode currencyCode
    ) {
        RateLoadResponse rateLoadResponse = tripAccountLoadService.rateLoad(currencyCode);

		return ApiResponse.toResponseEntity(
			HttpStatus.OK, StatusCode.SUCCESS_RATE_LOAD, rateLoadResponse
		);
	}

	@GetMapping("/trip-accounts")
	public ResponseEntity<ApiResponse<TripAccountsLoadResponse>> tripAccountsLoad(
		@AuthenticationPrincipal SecurityMember securityMember
	) {
		long memberId = securityMember.getId();
		TripAccountsLoadResponse tripAccountsLoadResponse = tripAccountLoadService.tripAccountsLoad(memberId);

		return ApiResponse.toResponseEntity(
			HttpStatus.OK, StatusCode.SUCCESS_TRIP_ACCOUNTS_LOAD, tripAccountsLoadResponse
		);
	}

	@GetMapping("/account-histories")
	public ResponseEntity<ApiResponse<Page<AccountHistoriesLoadDetail>>> accountHistoriesLoad(
		@AuthenticationPrincipal SecurityMember securityMember,
		Pageable pageable
	) {
		long memberId = securityMember.getId();
		Page<AccountHistoriesLoadDetail> accountHistoriesLoadDetails = tripAccountLoadService.accountHistoriesLoad(
			memberId, pageable);

		return ApiResponse.toResponseEntity(
			HttpStatus.OK, StatusCode.SUCCESS_ACCOUNT_HISTORIES_LOAD, accountHistoriesLoadDetails
		);
	}
}
