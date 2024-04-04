package com.ssafy.twinklebank.account.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

public record AccountResponse(
	@JsonProperty("account_uuid") String accountUuid,
	@JsonProperty("account_num") String accountNum,
	double balance,
	String name,
	@JsonProperty("is_connected") boolean isConnected
) {
}