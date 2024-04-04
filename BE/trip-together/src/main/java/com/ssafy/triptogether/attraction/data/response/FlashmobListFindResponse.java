package com.ssafy.triptogether.attraction.data.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record FlashmobListFindResponse(
	@JsonProperty("flashmobs") List<FlashmobElementFindResponse> elements
) {
}
