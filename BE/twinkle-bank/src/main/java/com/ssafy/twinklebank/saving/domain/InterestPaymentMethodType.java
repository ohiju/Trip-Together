package com.ssafy.twinklebank.saving.domain;

public enum InterestPaymentMethodType {
	AT_MATURITY("만기 시 일시 지급"),
	MONTHLY("월별 지급"),
	QUARTERLY("분기별 지급"),
	ANNUALLY("연간 지급");
	private final String message;

	InterestPaymentMethodType(String message) {
		this.message = message;
	}
}
