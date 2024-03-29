package com.ssafy.triptogether.plan.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

public record ReviewResponse(
    @JsonProperty("review_id") Long reviewId,
    @JsonProperty("writer_id") Long writerId,
    @JsonProperty("writer_profile_image_url") String writerProfileImageUrl,
    @JsonProperty("writer_nickname") String writerNickname,
    Integer rating,
    String content
) {
    @Builder
    public ReviewResponse {
        if (writerProfileImageUrl == null) {
            writerProfileImageUrl = "";
        }
        if (writerNickname == null) {
            writerNickname = "";
        }
    }
}
