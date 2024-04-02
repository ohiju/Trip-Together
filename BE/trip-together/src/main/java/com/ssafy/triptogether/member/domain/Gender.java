package com.ssafy.triptogether.member.domain;

import lombok.Getter;

@Getter
public enum Gender {
	MALE("남자"),
	FEMALE("여자");

	private final String message;

	Gender(String message) {
		this.message = message;
	}
}
