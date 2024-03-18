package com.ssafy.triptogether.global.data.response;

import lombok.Getter;

@Getter
public enum StatusCode {
    // AUTH
    SUCCESS_PIN_VERIFY(200, "PIN 인증 완료"),
    // TRIP_ACCOUNT
    SUCCESS_CURRENCY_LOAD(200, "환전 가능 통화 목록 조회 완료");

    private final int status;
    private final String message;

    StatusCode(final int status, final String message) {
        this.status = status;
        this.message = message;
    }
}
