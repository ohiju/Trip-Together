package com.ssafy.triptogether.plan.data.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record PlanDetail(
	@NotNull @JsonProperty("order")
	Integer sequence,
	@NotNull @JsonProperty("daily_estimated_budget")
	Double dailyEstimatedBudget,
	@NotNull @JsonProperty("attractions")
	List<Long> attractions
) {
}
