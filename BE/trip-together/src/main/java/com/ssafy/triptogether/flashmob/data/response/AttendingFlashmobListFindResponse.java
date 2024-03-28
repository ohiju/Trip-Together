package com.ssafy.triptogether.flashmob.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.util.List;

@Builder
public record AttendingFlashmobListFindResponse(
    @JsonProperty("flashmobs") List<AttendingFlashmobFindResponse> elements
) {
}
