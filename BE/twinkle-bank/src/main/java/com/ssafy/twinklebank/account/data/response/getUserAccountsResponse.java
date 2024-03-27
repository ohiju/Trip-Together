package com.ssafy.twinklebank.account.data.response;

import java.util.List;

import com.ssafy.twinklebank.account.data.request.AccountResponse;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record getUserAccountsResponse(
	@NotNull
	List<AccountResponse> accounts
) { }
