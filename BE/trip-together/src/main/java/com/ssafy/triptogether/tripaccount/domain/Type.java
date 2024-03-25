package com.ssafy.triptogether.tripaccount.domain;

import lombok.Getter;

@Getter
public enum Type {
    DEPOSIT("충전"),
    REFUND("환불"),
    WITHDRAW("출금");

    private final String message;

    Type(String message) {
        this.message = message;
    }
}
