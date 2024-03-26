package com.ssafy.triptogether.plan.data.request;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.plan.domain.document.DailyPlan;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PlansModifyRequest(
	@NotNull @JsonProperty("start_region_id")
	Long startRegionId,
	@NotNull @JsonProperty("start_at")
	LocalDate startAt,
	@NotNull @JsonProperty("end_at")
	LocalDate endAt,
	@NotBlank @JsonProperty("title")
	String title,
	@NotNull @JsonProperty("total_estimated_budget")
	Double estimatedBudget,
	@NotNull @JsonProperty("daily_plans")
	List<DailyPlan> planDetails
) {
}
