package com.ssafy.triptogether.global.data.response;

import lombok.Getter;

@Getter
public enum StatusCode {
    // SUCCESS CODE
    SUCCESS_PIN_VERIFY(200, "PIN 인증 완료"),
    SUCCESS_PROFILE_UPDATE(200, "프로필 수정 성공"),
    SUCCESS_PROFILE_FIND(200, "프로필 조회 성공");

    private final int status;
    private final String message;

    StatusCode(final int status, final String message) {
        this.status = status;
        this.message = message;
    }
}
