package com.ssafy.twinklebank.member.domain;

public enum GenderType {
	MALE("남자"),
	FEMALE("여자");
	private final String message;

	GenderType(String message) {
		this.message = message;
	}
}
