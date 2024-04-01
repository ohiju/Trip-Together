package com.ssafy.triptogether.tripaccount.domain;

import lombok.Getter;

@Getter
public enum CurrencyNation {
	EUR("유럽"),
	UK("영국");

	private final String message;

	CurrencyNation(String message) {
		this.message = message;
	}
}
