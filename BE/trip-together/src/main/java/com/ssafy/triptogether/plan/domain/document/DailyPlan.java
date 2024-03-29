package com.ssafy.triptogether.plan.domain.document;

import lombok.Builder;

import java.time.LocalDate;
import java.util.List;

public record DailyPlan(
    Double dailyEstimatedBudget,
    LocalDate date,
    List<DailyPlanAttraction> dailyPlanAttractions
) {
    @Builder
    public DailyPlan {
        if (dailyEstimatedBudget == null) {
            dailyEstimatedBudget = 0.0;
        }
    }
}
