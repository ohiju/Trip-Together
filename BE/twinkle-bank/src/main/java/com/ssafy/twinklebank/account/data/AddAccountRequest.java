package com.ssafy.twinklebank.account.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public record AddAccountRequest(
        @JsonProperty("account_uuid")
        String accountUuid
) {
}
