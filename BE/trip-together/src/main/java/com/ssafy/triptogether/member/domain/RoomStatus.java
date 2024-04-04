package com.ssafy.triptogether.member.domain;

import lombok.Getter;

@Getter
public enum RoomStatus {
	REFUSE_UNCHECK("확인안한거절"),
	REFUSE_CHECK("확인한거절"),
	WAIT("대기중"),
	ATTEND("참여중");

	private final String message;

	RoomStatus(String message) {
		this.message = message;
	}
}
