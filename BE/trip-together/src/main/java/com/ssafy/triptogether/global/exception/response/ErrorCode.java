package com.ssafy.triptogether.global.exception.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
	// MEMBER
	UNDEFINED_MEMBER(404, "사용자 정보를 찾을 수 없습니다."),

	// TRIP_ACCOUNT
	CURRENCY_NOT_FOUND(404, "통화를 찾을 수 없습니다."),
	// EXTERNAL_SERVER
	CURRENCY_RATE_LOAD_SERVER_ERROR(500, "환율 조회 API 요청에 실패했습니다"),
	BAD_REQUEST(400, "잘못된 요청입니다."),

	CERT_CODE_NOT_MATCH(400, "입력된 입력코드가 일치하지 않습니다."),

	WRONG_PASSWORD(401, "사용자 정보를 찾을 수 없습니다."),

	USER_NOT_KAKAO_JOINED(421, "카카오 가입 회원이 아닙니다."), // 커스텀 에러 사용 예시

	FORBIDDEN(403, "접근할 수 없습니다."),

	COMMENT_NOT_FOUND(404, "독후감을 찾을 수 없습니다."),

	CERT_CODE_EXPIRED(408, "코드가 만료되었습니다."),

	ALREADY_KAKAO_JOINED(409, "이미 카카오가입을 한 사용자입니다."),
	;

	private final int status;
	private final String message;
}
