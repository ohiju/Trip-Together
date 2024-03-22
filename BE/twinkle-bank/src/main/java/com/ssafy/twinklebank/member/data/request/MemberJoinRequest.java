package com.ssafy.twinklebank.member.data.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.twinklebank.member.domain.GenderType;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record MemberJoinRequest(
	@NotBlank(message = "username을 입력해주세요.")
	@JsonProperty("username")
	String username,
	@NotBlank(message = "name을 입력해주세요.")
	@JsonProperty("name")
	String name,
	@JsonProperty("gender")
	GenderType gender,
	@JsonProperty("birth")
	LocalDate birth,
	@NotBlank(message = "password를 입력해주세요.")
	@JsonProperty("password")
	String password
) {
}
