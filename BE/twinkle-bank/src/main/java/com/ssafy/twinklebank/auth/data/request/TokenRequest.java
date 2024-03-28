package com.ssafy.twinklebank.auth.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record TokenRequest(
	@NotBlank(message = "secret key를 입력해주세요")
	@JsonProperty("secret_key")
	String secretKey
) {
}
