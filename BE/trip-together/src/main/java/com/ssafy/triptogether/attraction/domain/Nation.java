package com.ssafy.triptogether.attraction.domain;

import lombok.Getter;

@Getter
public enum Nation {
	프랑스("EUR"),
	영국("GBP"),
	스페인("EUR");

	private final String message;

	Nation(String message) {
		this.message = message;
	}
}
