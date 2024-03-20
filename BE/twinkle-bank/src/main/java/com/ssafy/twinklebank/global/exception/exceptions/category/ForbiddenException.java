package com.ssafy.twinklebank.global.exception.exceptions.category;

import com.ssafy.twinklebank.global.exception.response.ErrorCode;

/**
 * 403 에러
 * 다른 권한을 가진 사용자 필요.
 */
public class ForbiddenException extends BankRuntimeException {
	protected static final String MESSAGE_KEY = "error.Forbidden";
	public ForbiddenException(String detailMessageKey, ErrorCode errorCode, Object... params) {
		super(MESSAGE_KEY + "." + detailMessageKey, errorCode, params);
	}
}
