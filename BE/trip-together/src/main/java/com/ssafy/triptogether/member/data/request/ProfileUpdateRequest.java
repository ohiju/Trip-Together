package com.ssafy.triptogether.member.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;

public record ProfileUpdateRequest(
	@JsonProperty("image_url") String imageUrl,
	@NotBlank(message = "변경할 닉네임을 입력해주세요.")
	String nickname,
	String description
) {
}
