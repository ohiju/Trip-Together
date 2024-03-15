package com.ssafy.twinklebank.saving.domain;

public enum SavingType {
	REGULAR_SAVINGS("일반 적금"),
	FIXED_DEPOSIT("정기 예금"),
	INSTALLMENT_SAVINGS("적립식 적금"),
	VARIABLE_INTEREST_SAVINGS("변동금리 적금");
	private final String message;

	SavingType(String message) {
		this.message = message;
	}
}
