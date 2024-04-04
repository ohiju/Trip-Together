package com.ssafy.triptogether.attraction.data.response;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.member.domain.RoomStatus;

public record FlashmobElementFindResponse(
	@JsonProperty("flashmob_id") Long flashmobId,
	@JsonProperty("master_id") Long masterId,
	@JsonProperty("master_image_url") String masterImageUrl,
	@JsonProperty("flashmob_title") String flashmobTitle,
	@JsonProperty("flashmob_start_at") LocalDateTime flashmobStartAt,
	@JsonProperty("flashmob_max_count") Integer flashmobMaxCount,
	@JsonProperty("flashmob_current_count") Long flashmobCurrentCount,
	@JsonProperty("attraction_name") String attractionName,
	RoomStatus status // null | "WAIT" | "ATTEND"
) {
	public FlashmobElementFindResponse {
		if (masterImageUrl == null) {
			masterImageUrl = "";
		}
		if (flashmobCurrentCount == null) {
			flashmobCurrentCount = 0L;
		}
	}
}
