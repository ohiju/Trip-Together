package com.ssafy.triptogether.auth.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record PinVerifyRequest(
	@JsonProperty("pin_num")
	String pinNum
) {
}
