package com.ssafy.triptogether.member.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record ReissueResponse(
	@NotBlank @JsonProperty("access")
	String access,
	@NotNull @JsonProperty("expires_in")
	Integer expiresIn,
	@NotNull @JsonProperty("created_at")
	Long createdAt
) {
}
