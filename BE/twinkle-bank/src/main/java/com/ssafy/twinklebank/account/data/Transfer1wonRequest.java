package com.ssafy.twinklebank.account.data;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record Transfer1wonRequest(
	@NotBlank @JsonProperty("client_id")
	String clientId,
	@NotBlank @JsonProperty("account_uuid")
	String accountUuid
) {
}
