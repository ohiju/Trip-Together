package com.ssafy.triptogether.tripaccount.data.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record CurrenciesLoadResponse(
	@JsonProperty("currencies")
	List<CurrenciesLoadDetailResponse> currenciesLoadDetailResponse
) {
}
