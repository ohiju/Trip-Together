package com.ssafy.triptogether.global.data.response;

import lombok.Getter;

@Getter
public enum StatusCode {
    // AUTH
    SUCCESS_PIN_VERIFY(200, "PIN 인증 성공"),
    // TRIP_ACCOUNT
    SUCCESS_CURRENCY_LOAD(200, "환전 가능 통화 목록 조회 성공"),
    //SYNC_ACCOUNT
    SUCCESS_SYNC_ACCOUNTS_LOAD(200, "연동 계좌 목록 조회 성공"),
    SUCCESS_MAIN_SYNC_ACCOUNT_UPDATE(200, "주계좌 변경 성공"),
    // MEMBER
    SUCCESS_PROFILE_UPDATE(200, "프로필 수정 성공"),
    SUCCESS_PROFILE_FIND(200, "프로필 조회 성공"),
    SUCCESS_PIN_SAVE(200, "pin 번호 등록 성공");

    private final int status;
    private final String message;

    StatusCode(final int status, final String message) {
        this.status = status;
        this.message = message;
    }
}
