package com.ssafy.triptogether.plan.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record AttractionDetail(
	@NotNull @JsonProperty("attraction_id")
	Long attractionId
) {
}
