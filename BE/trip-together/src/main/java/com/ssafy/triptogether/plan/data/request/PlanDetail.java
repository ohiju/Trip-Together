package com.ssafy.triptogether.plan.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.time.LocalDate;
import java.util.List;

@Builder
public record PlanDetail(
	@NotNull @JsonProperty("order")
	Integer sequence,
	@NotNull @JsonProperty("daily_estimated_budget")
	Double dailyEstimatedBudget,
	@NotNull @JsonProperty("attractions")
	List<AttractionDetail> attractions,
	@NotNull @JsonProperty("date")
	LocalDate date
) {
}
