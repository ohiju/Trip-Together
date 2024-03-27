package com.ssafy.triptogether.tripaccount.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.util.List;

@Builder
public record TripAccountsLoadResponse(
        @JsonProperty("trip_accounts")
        List<TripAccountsLoadDetail> tripAccountsLoadDetails,
        @JsonProperty("trip_account_count")
        Integer tripAccountCount
) {
}
