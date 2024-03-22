package com.ssafy.triptogether.infra.twinklebank.data.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record TwinkleBankAccountsLoadResponse(
	@JsonProperty("accounts")
	List<TwinkleBankAccountsDetail> twinkleBankAccountsDetails
) {
}
