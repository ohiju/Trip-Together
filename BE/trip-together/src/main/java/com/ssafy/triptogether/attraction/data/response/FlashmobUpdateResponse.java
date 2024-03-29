package com.ssafy.triptogether.attraction.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record FlashmobUpdateResponse(
    @JsonProperty("flashmob_id") Long flashmobId
) {
}
