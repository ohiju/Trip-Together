package com.ssafy.triptogether.syncaccount.data.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record BankAccountsLoadResponse(
	@JsonProperty("accounts")
	List<BankAccountsDetail> bankAccountsDetails
) {
}
