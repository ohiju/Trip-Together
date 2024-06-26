package com.ssafy.triptogether.auth.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record TokenResponse(
	@JsonProperty("user")
	MemberInfo memberInfo,
	@JsonProperty("token")
	TokenInfo tokenInfo
) {
}
