package com.ssafy.triptogether.plan.domain.document;

import lombok.Builder;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public record DailyPlan(
    @JsonProperty("daily_estimated_budget")
    Double dailyEstimatedBudget,
    LocalDate date,
    @JsonProperty("attractions")
    List<DailyPlanAttraction> dailyPlanAttractions
) {
    @Builder
    public DailyPlan {
        if (dailyEstimatedBudget == null) {
            dailyEstimatedBudget = 0.0;
        }
    }
}
