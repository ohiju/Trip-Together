package com.ssafy.triptogether.attraction.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.plan.data.response.ReviewResponse;
import lombok.Builder;

import java.time.LocalTime;
import java.util.List;

public record AttractionDetailFindResponse(
    @JsonProperty("attraction_id") Long attractionId,
    @JsonProperty("avg_price") Double avgPrice,
    @JsonProperty("start_at") LocalTime startAt,
    @JsonProperty("end_at") LocalTime endAt,
    @JsonProperty("attraction_image_urls") List<String> attractionImageUrls,
    @JsonProperty("attraction_name") String attractionName,
    @JsonProperty("attraction_address") String attractionAddress,
    @JsonProperty("avg_rating") Double avgRating,
    String latitude,
    String longitude,
    List<ReviewResponse> reviews
) {
    @Builder
    public AttractionDetailFindResponse {
        if (avgPrice == null) {
            avgPrice = 0.0;
        }
    }
}
