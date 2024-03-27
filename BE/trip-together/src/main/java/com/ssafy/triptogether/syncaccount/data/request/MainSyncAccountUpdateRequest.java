package com.ssafy.triptogether.syncaccount.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record MainSyncAccountUpdateRequest(
    @JsonProperty("account_uuid")
    String uuid
) {
}
