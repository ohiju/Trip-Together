package com.ssafy.twinklebank.account.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record AddAccountResponse(
	@JsonProperty("account_uuid") String accountUuid,
	@JsonProperty("account_num") String accountNum,
	@JsonProperty("account_name") String accountName
) {
}
