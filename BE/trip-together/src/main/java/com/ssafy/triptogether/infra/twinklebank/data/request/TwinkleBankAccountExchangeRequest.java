package com.ssafy.triptogether.infra.twinklebank.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.tripaccount.domain.Type;

import lombok.Builder;

@Builder
public record TwinkleBankAccountExchangeRequest(
	@JsonProperty("uuid")
	String uuid,
	@JsonProperty("account_uuid")
	String accountUuid,
	@JsonProperty("type")
	Type type,
	@JsonProperty("price")
	Double price,
	@JsonProperty("business_name")
	String businessName,
	@JsonProperty("address")
	String address
) {
}