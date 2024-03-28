package com.ssafy.triptogether.syncaccount.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record Verify1wonRequest(
	@NotBlank @JsonProperty("account_uuid")
	String accountUuid,
	@NotBlank @JsonProperty("code")
	String code
) {
}
