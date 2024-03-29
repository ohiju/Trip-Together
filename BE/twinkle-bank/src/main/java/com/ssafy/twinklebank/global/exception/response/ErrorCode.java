package com.ssafy.twinklebank.global.exception.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
	// ACCOUNT
	UNDEFINED_WITHDRAWAL_AGREEMENT(404, "출금동의 정보를 찾을 수 없습니다."),
	// MEMBER
	UNDEFINED_MEMBER(404, "사용자 정보를 찾을 수 없습니다."),

	MEMBER_NOT_AUTHORIZED(401, "로그인 된 사용자가 없습니다."),

	// APPLICATION
	APPLICATION_NOT_FOUND(404, "등록된 APPLICATION이 아닙니다."),
	WRONG_CLIENT_ID(401, "잘못된 CLIENT ID입니다."),
	WRONG_REDIRECT_URL(401, "잘못된 REDIRECT_URL 입니다."),
	WRONG_SECRET_KEY(401, "잘못된 SECRET KEY 입니다"),

	// COOKIE
	COOKIE_NOT_FOUND(404, "해당하는 쿠키가 없습니다."),

	// CODE
	CODE_NOT_FOUND(404, "인증 코드가 없습니다."),
	UNAUTHORIZED_CODE(401,"유효하지 않은 코드입니다."),

	REFRESH_NOT_FOUND(404, "refresh token이 비어있습니다."),
	UNAUTHORIZED_REFRESH(401,"유효하지 않은 refresh token입니다."),
	EXPIRED_TOKEN(401, "만료된 토큰입니다."),

	UNAUTHORIZED_MEMBER(401, "권한이 없는 멤버입니다."),

	BAD_REQUEST(400, "잘못된 요청입니다."),

	WRONG_PASSWORD(401, "잘못된 PASSWORD 입니다."),
	WRONG_USERNAME_OR_PASSWORD(401, "잘못된 ID/PASSWORD 입니다."),

	USER_NOT_KAKAO_JOINED(421, "카카오 가입 회원이 아닙니다."), // 커스텀 에러 사용 예시

	FORBIDDEN(403, "접근할 수 없습니다."),

	COMMENT_NOT_FOUND(404, "독후감을 찾을 수 없습니다."),

	CERT_CODE_EXPIRED(408, "코드가 만료되었습니다."),

	ALREADY_KAKAO_JOINED(409, "이미 카카오가입을 한 사용자입니다."),

	ACCOUNT_NOT_FOUND(404, "계좌를 찾을 수 없습니다."),
	ONEWON_NOT_FOUND(404, "발급된 1원 인증코드가 없습니다."),
	UNAUTHORIZED_ONEWON(401, "유효하지 않은 1원 인증 코드입니다.")
	;

	private final int status;
	private final String message;
}
