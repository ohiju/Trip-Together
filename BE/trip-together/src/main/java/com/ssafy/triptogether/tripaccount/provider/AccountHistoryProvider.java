package com.ssafy.triptogether.tripaccount.provider;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.triptogether.tripaccount.data.request.AccountHistorySaveRequest;
import com.ssafy.triptogether.tripaccount.data.request.PaymentReceiverDetail;
import com.ssafy.triptogether.tripaccount.data.request.PaymentSenderDetail;
import com.ssafy.triptogether.tripaccount.domain.AccountHistory;
import com.ssafy.triptogether.tripaccount.repository.AccountHistoryRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@Transactional
public class AccountHistoryProvider {
	// Repository
	private final AccountHistoryRepository accountHistoryRepository;

	/**
	 * 계좌 내역 생성
	 * @param accountHistorySaveRequest 계좌 내역 생성 요청
	 */
	public void accountHistoryMaker(AccountHistorySaveRequest accountHistorySaveRequest) {
		PaymentReceiverDetail receiver = accountHistorySaveRequest.paymentReceiverDetail();
		if (receiver != null) {
			AccountHistory receiverAccountHistory = AccountHistory.builder()
				.tripAccount(receiver.tripAccount())
				.type(receiver.type())
				.businessNum(receiver.businessNum())
				.businessName(receiver.businessName())
				.address(receiver.address())
				.quantity(receiver.quantity())
				.balance(receiver.tripAccount().getBalance())
				.build();
			accountHistoryRepository.save(receiverAccountHistory);
		}
		PaymentSenderDetail sender = accountHistorySaveRequest.paymentSenderDetail();
		if (sender != null) {
			AccountHistory senderAccountHistory = AccountHistory.builder()
				.tripAccount(sender.tripAccount())
				.type(sender.type())
				.businessNum(sender.businessNum())
				.businessName(sender.businessName())
				.address(sender.address())
				.quantity(sender.quantity())
				.balance(sender.tripAccount().getBalance())
				.build();
			accountHistoryRepository.save(senderAccountHistory);
		}
	}
}
