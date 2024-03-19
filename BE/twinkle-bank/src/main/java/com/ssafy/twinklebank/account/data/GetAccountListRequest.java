package com.ssafy.twinklebank.account.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public record GetAccountListRequest(
        @JsonProperty("app_id") String appId
) {
}
