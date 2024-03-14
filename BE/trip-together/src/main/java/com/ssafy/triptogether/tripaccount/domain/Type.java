package com.ssafy.triptogether.tripaccount.domain;

import lombok.Getter;

@Getter
public enum Type {
    DEPOSIT("입금"),
    TRANSFER("송금"),
    WITHDRAW("출금");

    private final String message;

    Type(String message) {
        this.message = message;
    }
}
