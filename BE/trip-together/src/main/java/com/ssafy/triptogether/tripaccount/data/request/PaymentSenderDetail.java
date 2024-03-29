package com.ssafy.triptogether.tripaccount.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.tripaccount.domain.TripAccount;
import com.ssafy.triptogether.tripaccount.domain.Type;

import lombok.Builder;

@Builder
public record PaymentSenderDetail(
	@JsonProperty("sender_trip_account")
	TripAccount tripAccount,
	@JsonProperty("type")
	Type type,
	@JsonProperty("business_name")
	String businessName,
	@JsonProperty("business_num")
	String businessNum,
	@JsonProperty("address")
	String address,
	@JsonProperty("quantity")
	Double quantity
) {
}
