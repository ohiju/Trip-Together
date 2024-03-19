package com.ssafy.twinklebank.account.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public record GetAccountListRequest(
        @JsonProperty("tran_id") String tranId
) {
}
