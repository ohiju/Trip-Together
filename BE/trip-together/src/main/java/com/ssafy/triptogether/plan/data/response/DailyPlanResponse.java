package com.ssafy.triptogether.plan.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;

public record DailyPlanResponse(
        @JsonProperty("start_region") String startRegion,
        @JsonProperty("start_at") LocalDate startAt,
        @JsonProperty("end_at") LocalDate endAt,
        String title,
        @JsonProperty("total_estimated_budget") Double totalEstimatedBudget
) {
}
