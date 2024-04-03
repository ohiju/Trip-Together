package com.ssafy.triptogether.syncaccount.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record Transfer1wonResponse(
	@JsonProperty("code1won")
	String code1won) {
}
