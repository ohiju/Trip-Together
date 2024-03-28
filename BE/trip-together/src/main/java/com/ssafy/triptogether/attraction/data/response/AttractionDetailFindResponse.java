package com.ssafy.triptogether.attraction.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.plan.data.response.ReviewResponse;

import lombok.Builder;

import java.time.LocalTime;
import java.util.List;

@Builder
public record AttractionDetailFindResponse(
    @JsonProperty("attraction_id") Long attractionId,
    @JsonProperty("avg_price") Double avgPrice,
    @JsonProperty("start_at") LocalTime startAt,
    @JsonProperty("end_at") LocalTime endAt,
    @JsonProperty("attraction_image_urls") List<String> attractionImageUrls,
    String latitude,
    String longitude,
    List<ReviewResponse> reviews
) {
}
