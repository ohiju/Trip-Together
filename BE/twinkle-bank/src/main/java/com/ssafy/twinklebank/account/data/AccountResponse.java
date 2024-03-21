package com.ssafy.twinklebank.account.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public record AccountResponse(
    @JsonProperty("account_uuid") String accountUuid,
    @JsonProperty("account_num") String accountNum,
    double balance,
    String name
) {
}
