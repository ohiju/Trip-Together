package com.ssafy.twinklebank.account.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;

public record AddAccountRequest(
        @NotNull
        @JsonProperty("account_uuid")
        String accountUuid
) {
}
