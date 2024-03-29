package com.ssafy.triptogether.plan.domain.document;

import lombok.Builder;

public record DailyPlanAttraction(
    Integer order,
    Long attractionId,
    String attractionName,
    Integer avgRating,
    Double avgPrice,
    String thumbnailImageUrl,
    String address
) {
    @Builder
    public DailyPlanAttraction {
        if (avgRating == null) {
            avgRating = 0;
        }
        if (avgPrice == null) {
            avgPrice = 0.0;
        }
        if (thumbnailImageUrl == null) {
            thumbnailImageUrl = "";
        }
        if (address == null) {
            address = "";
        }
    }
}
