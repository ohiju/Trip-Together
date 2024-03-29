package com.ssafy.triptogether.attraction.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.util.List;

@Builder
public record AttractionFlashmobListFindResponse(
    @JsonProperty("attractions") List<AttractionFlashmobListItemResponse> elements
) {
}
