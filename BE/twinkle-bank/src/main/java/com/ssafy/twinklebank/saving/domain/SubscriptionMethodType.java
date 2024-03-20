package com.ssafy.twinklebank.saving.domain;

public enum SubscriptionMethodType {
	ONLINE("온라인"),
	OFFLINE("오프라인"),
	MOBILE_APP("모바일앱");
	private final String message;

	SubscriptionMethodType(String message) {
		this.message = message;
	}
}
