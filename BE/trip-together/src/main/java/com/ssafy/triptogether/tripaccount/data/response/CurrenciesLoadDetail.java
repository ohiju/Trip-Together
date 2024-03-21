package com.ssafy.triptogether.tripaccount.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record CurrenciesLoadDetail(
	@JsonProperty("currency_code")
	String code,
	@JsonProperty("nation")
	String nation,
	@JsonProperty("nation_kr")
	String nationKr,
	@JsonProperty("unit")
	Integer unit
) {
}
