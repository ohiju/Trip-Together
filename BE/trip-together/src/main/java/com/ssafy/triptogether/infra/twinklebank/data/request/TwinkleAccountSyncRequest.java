package com.ssafy.triptogether.infra.twinklebank.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record TwinkleAccountSyncRequest(
	@JsonProperty("account_uuid")
	String accountUuid,
	@JsonProperty("uuid")
	String uuid
) {
}
