package com.ssafy.triptogether.member.data.response;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.member.domain.Gender;

public record ProfileFindResponse(
	@JsonProperty("member_id") long memberId,
	@JsonProperty("image_url") String imageUrl,
	String nickname,
	String description,
	Gender gender,
	LocalDate birth,
	@JsonProperty("created_at") LocalDateTime createdAt,
	String username
) {
	public ProfileFindResponse {
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
