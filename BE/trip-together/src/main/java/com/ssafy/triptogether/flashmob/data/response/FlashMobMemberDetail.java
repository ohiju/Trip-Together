package com.ssafy.triptogether.flashmob.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record FlashMobMemberDetail(
	@JsonProperty("member_id")
	Long memberId,
	@JsonProperty("member_image_url")
	String memberImageUrl,
	@JsonProperty("member_nickname")
	String memberNickname
) {
}
