package com.ssafy.triptogether.attraction.data;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record FlashmobUpdateResponse(
        @JsonProperty("flashmob_id") Long flashmobId
) {
}
