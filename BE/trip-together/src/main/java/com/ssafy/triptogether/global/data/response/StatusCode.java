package com.ssafy.triptogether.global.data.response;

import lombok.Getter;

@Getter
public enum StatusCode {
	// AUTH
	SUCCESS_PIN_VERIFY(200, "PIN 인증 성공"), SUCCESS_TRIP_TOKEN(201, "여행 토큰 발급 성공"),
	SUCCESS_REISSUE(201, "여행 토큰 재발급 성공"),
	SUCCESS_1WON_TRANSFER(201, "1원 인증 요청 성공"),
	SUCCESS_1WON_VERIFY(200, "1원 인증 검증 성공"),
	// PLAN
	SUCCESS_PLANS_SAVE(201, "여행 계획 저장 성공"),
	SUCCESS_PLAN_DELETE(204, "여행 계획 삭제 성공"),
	SUCCESS_PLAN_DETAIL_FIND(200, "여행 계획 상세 조회 성공"),
	SUCCESS_PLANS_FIND(200, "여행 계획 목록 조회 성공"),
	SUCCESS_PLANS_MODIFY(200, "여행 계획 수정 성공"),
	//ATTRACTION
	SUCCESS_ATTRACTION_DETAIL_FIND(200, "여행지별 명소 상세 조회 성공"),
	SUCCESS_ATTRACTION_LIST_CLICK_FIND(200, "여행지별 명소 목록 클릭 조회 성공"),
	SUCCESS_ATTRACTION_LIST_SEARCH_FIND(200, "여행지별 명소 목록 검색 조회 성공"),
	SUCCESS_FLASHMOB_UPDATE(200, "여행지별 번개 수정 성공"),
	SUCCESS_REGIONS_LOAD(200, "도시 조회 성공"),
	SUCCESS_CREATE_FLASHMOB(201, "번개 생성 성공"),
	// FLASHMOB
	SUCCESS_FLASHMOB_REQUEST(201, "번개 참가신청 등록 성공"),
	SUCCESS_FLASHMOB_LIST_FIND(200, "번개 목록조회 조회 성공"),
	SUCCESS_FLASHMOB_DENIED_CHECK(200, "거절된 번개 확인 성공"),
	SUCCESS_FLASHMOB_CANCEL(204, "번개 신청 취소 성공"),
	SUCCESS_APPLY_ACCEPT(200, "번개 신청 수락"),
	SUCCESS_APPLY_DENY(200, "번개 신청 거절"),
	SUCCESS_FLASHMOB_QUIT(204, "번개 나가기 완료"),
	SUCCESS_SETTLEMENT_SAVE(201, "정산 요청 완료"),
	SUCCESS_SETTLEMENTS_LOAD(200, "정산 목록 조회 완료"),
	SUCCESS_RECEIPTS_LOAD(200, "영수증 목록 조회 완료"),
	SUCCESS_ATTENDEES_STATUS_LOAD(200, "정산 현황 조회 완료"),
	SUCCESS_SETTLEMENT_SEND(200, "정산 요청 송금 완료"),
	SUCCESS_SETTLEMENT_DELETE(204, "정산 요청 취소 완료"),
	SUCCESS_FLASHMOB_MEMBER_LOAD(200, "번개 모임 인원 조회 성공"),
	// TRIP_ACCOUNT
	SUCCESS_CURRENCY_LOAD(200, "환전 가능 통화 목록 조회 성공"),
	SUCCESS_RATE_LOAD(200, "요청 통화 환율 조회 성공"),
	SUCCESS_TRIP_ACCOUNTS_LOAD(200, "지갑 내 목록 조회 성공"),
	SUCCESS_ACCOUNT_HISTORIES_LOAD(200, "거래 내역 조회 성공"),
	SUCCESS_TRIP_ACCOUNT_PAY(200, "거래 성공"),
	SUCCESS_TRIP_ACCOUNT_EXCHANGE(200, "환전 성공"),
	//SYNC_ACCOUNT
	SUCCESS_SYNC_ACCOUNTS_LOAD(200, "연동 계좌 목록 조회 성공"),
	SUCCESS_MAIN_SYNC_ACCOUNT_UPDATE(200, "주계좌 변경 성공"),
	SUCCESS_BANK_ACCOUNTS_LOAD(200, "회원 은행 계좌 목록 조회 성공"),
	SUCCESS_SYNC_ACCOUNTS_SAVE(201, "연동 계좌 등록 성공"),
	SUCCESS_SYNC_ACCOUNT_DELETE(204, "연동 계좌 해지 성공"),
	// MEMBER
	SUCCESS_PROFILE_UPDATE(200, "프로필 수정 성공"),
	SUCCESS_PROFILE_FIND(200, "프로필 조회 성공"),
	SUCCESS_PIN_SAVE(200, "pin 번호 등록 성공"),
	SUCCESS_PIN_UPDATE(200, "pin 번호 수정 성공"),
	SUCCESS_LOGOUT(200, "로그아웃 성공"),
	// CHAT
	SUCCESS_SEND_CHAT(200, "채팅 메시지 전송 성공");

	private final int status;
	private final String message;

	StatusCode(final int status, final String message) {
		this.status = status;
		this.message = message;
	}
}
