package com.ssafy.triptogether.plan.data.request;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record PlansSaveRequest(
	@NotNull @JsonProperty("start_region_id")
	Long startRegionId,
	@NotNull @JsonProperty("start_at")
	LocalDate startAt,
	@NotNull @JsonProperty("end_at")
	LocalDate endAt,
	@NotNull @JsonProperty("title")
	String title,
	@JsonProperty("total_estimated_budget")
	Double estimatedBudget,
	@JsonProperty("daily_plans")
	List<PlanDetail> planDetails
) {
}
