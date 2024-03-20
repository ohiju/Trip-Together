package com.ssafy.twinklebank.auth.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record TokenResponse(
	@JsonProperty("access_token")
	String accessToken
) {
}
