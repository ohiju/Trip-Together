package com.ssafy.twinklebank.account.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public record AccountResponse(
    @JsonProperty("account_uuid") String accountUUID,
    @JsonProperty("account_num") String accountNum,
    double balance,
    String name
) {
}
