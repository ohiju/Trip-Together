package com.ssafy.triptogether.plan.data.response;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.attraction.domain.Nation;

public record DailyPlanResponse(
	@JsonProperty("plan_id") Long planId,
	Nation nation,
	@JsonProperty("start_region_id") Long startRegionId,
	@JsonProperty("start_region") String startRegion,
	@JsonProperty("start_region_latitude") String startRegionLatitude,
	@JsonProperty("start_region_longitude") String startRegionLongitude,
	@JsonProperty("start_at") LocalDate startAt,
	@JsonProperty("end_at") LocalDate endAt,
	String title,
	@JsonProperty("total_estimated_budget") Double totalEstimatedBudget
) {
}
