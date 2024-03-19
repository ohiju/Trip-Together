package com.ssafy.twinklebank.global.exception.exceptions;

import com.ssafy.twinklebank.global.exception.exceptions.category.UnAuthorizedException;
import com.ssafy.twinklebank.global.exception.response.ErrorCode;

public class WrongPasswordException extends UnAuthorizedException {
	private static final ErrorCode errorCode = ErrorCode.WRONG_PASSWORD;

	public WrongPasswordException(String detailMessageKey, Object... params) {
		super(errorCode.getMessage() + " : " + detailMessageKey, errorCode, params);
	}
}
