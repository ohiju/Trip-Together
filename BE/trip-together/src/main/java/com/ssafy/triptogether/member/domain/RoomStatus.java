package com.ssafy.triptogether.member.domain;

import lombok.Getter;

@Getter
public enum RoomStatus {
    REFUSE("거절됨"),
    WAIT("대기중"),
    ATTEND("참여중");

    private final String message;

    RoomStatus(String message) {
        this.message = message;
    }
}
