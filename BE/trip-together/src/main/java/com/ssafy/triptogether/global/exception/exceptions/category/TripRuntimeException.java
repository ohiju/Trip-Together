package com.ssafy.triptogether.global.exception.exceptions.category;

import com.ssafy.triptogether.global.exception.response.ErrorCode;

import lombok.Getter;

/**
 * 최상위 커스텀 에러
 */
@Getter
public abstract class TripRuntimeException extends RuntimeException {
	private final String messageKey;
	private final Object[] params;
	private final ErrorCode errorCode;

	public TripRuntimeException(String messageKey, ErrorCode errorCode, Object... params) {
		this.messageKey = messageKey;
		this.params = params;
		this.errorCode = errorCode;
	}
}
