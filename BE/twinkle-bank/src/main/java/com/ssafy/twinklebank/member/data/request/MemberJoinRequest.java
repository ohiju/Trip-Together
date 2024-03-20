package com.ssafy.twinklebank.member.data.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.twinklebank.member.domain.GenderType;

import lombok.Builder;

@Builder
public record MemberJoinRequest(
	@JsonProperty("username")
	String username,
	@JsonProperty("name")
	String name,
	@JsonProperty("gender")
	GenderType gender,
	@JsonProperty("birth")
	LocalDate birth,
	@JsonProperty("password")
	String password
) {
}
