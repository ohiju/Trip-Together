package com.ssafy.triptogether.attraction.data;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.plan.domain.Status;

import java.time.LocalDateTime;

public record FlashmobElementFindResponse(
    @JsonProperty("flashmob_id") Long flashmobId,
    @JsonProperty("master_id") Long masterId,
    @JsonProperty("master_image_url") String masterImageUrl,
    @JsonProperty("flashmob_title") String flashmobTitle,
    @JsonProperty("flashmob_start_at") LocalDateTime flashmobStartAt,
    @JsonProperty("flashmob_max_count") Integer flashmobMaxCount,
    @JsonProperty("flashmob_current_count") Integer flashmobCurrentCount,
    @JsonProperty("attraction_name") String attractionName,
    Status status // null | "WAIT" | "ATTEND"
) {
}
