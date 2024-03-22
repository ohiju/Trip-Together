package com.ssafy.twinklebank.auth.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record CodeRequest(
	@NotBlank(message = "client id를 입력해주세요.")
	@JsonProperty("client_id")
	String clientId,
	@NotBlank(message = "redirect url을 입력해주세요.")
	@JsonProperty("redirect_url")
	String redirectUrl,
	@NotBlank(message = "user id을 입력해주세요.")
	@JsonProperty("user_id")
	String username,
	@NotBlank(message = "password를 입력해주세요.")
	@JsonProperty("password")
	String password
) {
}
