package com.ssafy.twinklebank.auth.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record CodeResponse(
	@NotBlank @JsonProperty("code")
	String code
) {
}
