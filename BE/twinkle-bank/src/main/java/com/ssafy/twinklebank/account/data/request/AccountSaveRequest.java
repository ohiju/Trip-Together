package com.ssafy.twinklebank.account.data.request;

public record AccountSaveRequest(
    String username,
    String password,
    String name
) {
}
