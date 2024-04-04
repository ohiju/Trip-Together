package com.ssafy.triptogether.plan.domain.document;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

public record DailyPlan(
	@JsonProperty("daily_estimated_budget") Double dailyEstimatedBudget,
	Integer order,
	@JsonProperty("attractions") List<DailyPlanAttraction> dailyPlanAttractions
) {
	@Builder
	public DailyPlan {
		if (dailyEstimatedBudget == null) {
			dailyEstimatedBudget = 0.0;
		}
	}
}
