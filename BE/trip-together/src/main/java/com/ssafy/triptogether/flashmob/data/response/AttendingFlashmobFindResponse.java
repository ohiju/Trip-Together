package com.ssafy.triptogether.flashmob.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.member.domain.RoomStatus;

import java.time.LocalDateTime;

public record AttendingFlashmobFindResponse(
    @JsonProperty("flashmob_id") Long flashmobId,
    @JsonProperty("master_id") Long masterId,
    @JsonProperty("master_image_url") String masterImageUrl,
    @JsonProperty("flashmob_title") String flashmobTitle,
    @JsonProperty("flashmob_start_at") LocalDateTime startAt,
    @JsonProperty("flashmob_max_count") Integer flashmobMaxCount,
    @JsonProperty("flashmob_current_count") Long currentCount,
    @JsonProperty("member_flashmob_id") Long memberFlashmobId,
    @JsonProperty("attraction_name") String attractionName,
    RoomStatus status
) {
    public AttendingFlashmobFindResponse {
        if (masterImageUrl == null) {
            masterImageUrl = "";
        }
        if (currentCount == null) {
            currentCount = 0L;
        }
    }
}
