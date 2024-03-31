package com.ssafy.triptogether.flashmob.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record AttendeesStatusDetail(
	@JsonProperty("member_id")
	Long memberId,
	@JsonProperty("member_nickname")
	String memberNickname,
	@JsonProperty("member_image_url")
	String memberImageUrl,
	@JsonProperty("price")
	Double price,
	@JsonProperty("has_sent")
	Boolean isSent
) {
}
