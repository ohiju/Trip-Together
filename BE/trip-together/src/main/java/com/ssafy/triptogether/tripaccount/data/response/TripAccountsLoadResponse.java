package com.ssafy.triptogether.tripaccount.data.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record TripAccountsLoadResponse(
	@JsonProperty("trip_accounts")
	List<TripAccountsLoadDetail> tripAccountsLoadDetails,
	@JsonProperty("trip_account_count")
	Integer tripAccountCount
) {
}
