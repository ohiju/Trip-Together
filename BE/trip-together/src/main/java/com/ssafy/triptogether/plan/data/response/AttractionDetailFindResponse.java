package com.ssafy.triptogether.plan.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

import java.time.LocalTime;
import java.util.List;

@Builder
public record AttractionDetailFindResponse(
        @JsonProperty("avg_price") Double avgPrice,
        @JsonProperty("start_at") LocalTime startAt,
        @JsonProperty("end_at") LocalTime endAt,
        @JsonProperty("attraction_image_urls") List<String> attractionImageUrls,
        String latitude,
        String longitude,
        List<ReviewResponse> reviews
) {
}
