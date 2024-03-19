package com.ssafy.twinklebank.global.exception.exceptions;

import com.ssafy.twinklebank.global.exception.exceptions.category.UnAuthorizedException;
import com.ssafy.twinklebank.global.exception.response.ErrorCode;

public class WrongUserNameOrPassWordException extends UnAuthorizedException {
	private static final ErrorCode errorCode = ErrorCode.WRONG_USERNAME_OR_PASSWORD;

	public WrongUserNameOrPassWordException(String detailMessageKey, Object... params) {
		super(errorCode.getMessage() + " : " + detailMessageKey, errorCode, params);
	}
}
