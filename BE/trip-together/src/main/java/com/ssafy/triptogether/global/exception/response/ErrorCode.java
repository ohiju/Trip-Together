package com.ssafy.triptogether.global.exception.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
	// MEMBER
	UNDEFINED_MEMBER(404, "사용자 정보를 찾을 수 없습니다."),
	PIN_CHECK_MISS_MATCH(400, "핀번호와 핀번호 확인이 서로 일치하지 않습니다."),
	PIN_ALREADY_EXISTS(400, "지갑이 이미 존재합니다"),

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
