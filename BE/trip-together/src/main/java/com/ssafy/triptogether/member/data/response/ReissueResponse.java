package com.ssafy.triptogether.member.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record ReissueResponse(
	@NotBlank @JsonProperty("access_token")
	String access,
	@NotNull @JsonProperty("expires_in")
	Long expiresIn,
	@NotNull @JsonProperty("created_at")
	Long createdAt
) {
}
