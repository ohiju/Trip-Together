package com.ssafy.triptogether.tripaccount.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.tripaccount.domain.CurrencyNation;
import lombok.Builder;

@Builder
public record TripAccountsLoadDetail(
    @JsonProperty("nation")
    CurrencyNation currencyNation,
    @JsonProperty("nation_kr")
    String nationKr,
    @JsonProperty("balance")
    Double balance,
    @JsonProperty("unit")
    Integer unit
) {
}
