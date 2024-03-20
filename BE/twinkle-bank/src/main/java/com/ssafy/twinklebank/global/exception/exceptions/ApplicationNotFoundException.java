package com.ssafy.twinklebank.global.exception.exceptions;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.global.exception.response.ErrorCode;

public class ApplicationNotFoundException extends NotFoundException {
	private static final ErrorCode errorCode = APPLICATION_NOT_FOUND;

	public ApplicationNotFoundException(String detailMessageKey, Object... params) {
		super(errorCode.getMessage() + " : " + detailMessageKey, errorCode, params);
	}
}
