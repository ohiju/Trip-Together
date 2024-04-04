package com.ssafy.triptogether.flashmob.data.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record SettlementSaveRequest(
	@NotNull @JsonProperty("currency_code")
	CurrencyCode currencyCode,
	@NotNull @JsonProperty("total_price")
	Double totalPrice,
	@NotNull @JsonProperty("attendees_count")
	Integer attendeesCount,
	@NotNull @JsonProperty("attendees")
	List<SettlementSaveAttendeesDetail> attendeesDetails
) {
}
