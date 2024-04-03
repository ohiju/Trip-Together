package com.ssafy.triptogether.tripaccount.data.response;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.tripaccount.domain.CurrencyNation;

import lombok.Builder;

@Builder
public record AccountHistoriesLoadDetail(
	@JsonProperty("account_history_id")
	Long accountHistoryId,
	@JsonProperty("nation")
	CurrencyNation currencyNation,
	@JsonProperty("nation_kr")
	String nationKr,
	@JsonProperty("unit")
	Integer unit,
	@JsonProperty("type")
	String type,
	@JsonProperty("usage")
	String usage,
	@JsonProperty("quantity")
	Double quantity,
	@JsonProperty("balance")
	String balance,
	@JsonProperty("created_at")
	LocalDateTime createdAt
) {
}
