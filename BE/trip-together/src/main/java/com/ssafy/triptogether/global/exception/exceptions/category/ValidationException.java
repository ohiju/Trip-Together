package com.ssafy.triptogether.global.exception.exceptions.category;

import com.ssafy.triptogether.global.exception.response.ErrorCode;

/**
 * 400 에러
 * 클라이언트가 입력한 값이 검증되지 않음
 */
public class ValidationException extends TripRuntimeException {
	protected static final String MESSAGE_KEY = "error.InValid";

	public ValidationException(String detailMessageKey, ErrorCode errorCode, Object... params) {
		super(MESSAGE_KEY + "." + detailMessageKey, errorCode, params);
	}
}
