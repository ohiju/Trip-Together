package com.ssafy.triptogether.attraction.data;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.util.List;

@Builder
public record FlashmobListFindResponse(
    @JsonProperty("flashmobs") List<FlashmobElementFindResponse> elements
) {
}
