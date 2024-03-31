package com.ssafy.triptogether.plan.data.response;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.attraction.domain.Nation;
import com.ssafy.triptogether.plan.domain.document.DailyPlan;

import lombok.Builder;

@Builder
public record PlanDetailFindResponse(
    @JsonProperty("plan_id") Long planId,
    Nation nation,
	@JsonProperty("start_region_id") Long startRegionId,
    @JsonProperty("start_region") String startRegion,
    @JsonProperty("start_at") LocalDate startAt,
    @JsonProperty("end_at") LocalDate endAt,
    String title,
    @JsonProperty("total_estimated_budget") Double totalEstimatedBudget,
    @JsonProperty("daily_plans") List<DailyPlan> dailyPlans
) {
}
