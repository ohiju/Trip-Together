package com.ssafy.twinklebank.account.data.response;

import java.util.List;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record getUserAccountsResponse(
	@NotNull
	List<AccountResponse> accounts
) {
}
