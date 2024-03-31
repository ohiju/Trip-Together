package com.ssafy.triptogether.plan.domain.document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

public record DailyPlanAttraction(
    Integer order,
	@JsonProperty("attraction_id") Long attractionId,
	@JsonProperty("attraction_name") String attractionName,
	@JsonProperty("avg_rating") Integer avgRating,
	@JsonProperty("avg_price") Double avgPrice,
	@JsonProperty("thumbnail_image_url") String thumbnailImageUrl,
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
