package com.ssafy.triptogether.plan.data.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record PlanDetail(
    @JsonProperty("daily_estimated_budget")
    Double dailyEstimatedBudget,
    Integer order,
    @JsonProperty("attractions")
    List<AttractionDetail> attractionDetails
) {
}
