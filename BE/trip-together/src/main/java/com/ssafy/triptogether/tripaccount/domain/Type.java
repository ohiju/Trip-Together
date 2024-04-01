package com.ssafy.triptogether.tripaccount.domain;

import lombok.Getter;

@Getter
public enum Type {
    EXCHANGE("환전"),
    DEPOSIT("입금"),
    REFUND("환불"),
    SEND("송금"),

    WITHDRAW("출금");

    private final String message;

    Type(String message) {
        this.message = message;
    }
}
