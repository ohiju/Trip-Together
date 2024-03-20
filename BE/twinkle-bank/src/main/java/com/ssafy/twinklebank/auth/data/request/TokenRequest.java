package com.ssafy.twinklebank.auth.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

// 일단은 access token 요청 시 id, password를 준다고 가정하고 구현 -> 코드 부분은 이 이후에 구현 예정
@Builder
public record TokenRequest(
	@JsonProperty("client_id")
	String clientId,
	@JsonProperty("code")
	String code,
	@JsonProperty("user_id")
	String username,
	@JsonProperty("password")
	String password
) {
}
