package com.ssafy.triptogether.member.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

public record ProfileUpdateResponse(
	@JsonProperty("member_id") Long memberId,
	@JsonProperty("image_url") String imageUrl,
	String nickname,
	String description
) {
	@Builder
	public ProfileUpdateResponse {
		if (imageUrl == null) {
			imageUrl = "";
		}
		if (nickname == null) {
			nickname = "";
		}
		if (description == null) {
			description = "";
		}
	}
}
