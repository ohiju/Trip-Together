package com.ssafy.twinklebank.member.data.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.twinklebank.member.domain.GenderType;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record MemberJoinRequest(
	@NotNull
	@JsonProperty("username")
	String username,
	@NotNull
	@JsonProperty("name")
	String name,
	@JsonProperty("gender")
	GenderType gender,
	@JsonProperty("birth")
	LocalDate birth,
	@NotNull
	@JsonProperty("password")
	String password
) {
}
