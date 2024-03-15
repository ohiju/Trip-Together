package com.ssafy.twinklebank.account.domain;

public enum Type {
	DEPOSIT("입금"),
	TRANSFER("송금"),
	WITHDRAW("출금");

	private final String message;

	Type(String message) {
		this.message = message;
	}
}
