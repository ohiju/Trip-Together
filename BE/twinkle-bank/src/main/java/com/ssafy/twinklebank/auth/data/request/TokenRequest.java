package com.ssafy.twinklebank.auth.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

// 일단은 access token 요청 시 id, password를 준다고 가정하고 구현 -> 코드 부분은 이 이후에 구현 예정
@Builder
public record TokenRequest(
	@NotBlank(message = "clientId를 입력해주세요.")
	@JsonProperty("client_id")
	String clientId,
	@NotBlank(message = "code를 입력해주세요.")
	@JsonProperty("code")
	String code,
	@NotBlank(message = "username를 입력해주세요.")
	@JsonProperty("user_id")
	String username,
	@NotBlank(message = "비밀번호를 입력해주세요.")
	@JsonProperty("password")
	String password
) {
}
