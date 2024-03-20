package com.ssafy.triptogether.syncaccount.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.utils.AuthUtils;
import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.infra.twinklebank.TwinkleBankClient;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankAccountsLoadRequest;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleBankAccountsLoadResponse;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.syncaccount.data.request.MainSyncAccountUpdateRequest;
import com.ssafy.triptogether.syncaccount.data.response.BankAccountsDetail;
import com.ssafy.triptogether.syncaccount.data.response.BankAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsDetail;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.domain.SyncAccount;
import com.ssafy.triptogether.syncaccount.repository.SyncAccountRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SyncAccountServiceImpl implements SyncAccountLoadService, SyncAccountSaveService {
	// Client
	private final TwinkleBankClient twinkleBankClient;
	// Utils
	private final AuthUtils authUtils;
	// Repository
	private final SyncAccountRepository syncAccountRepository;
	private final MemberRepository memberRepository;

	/**
	 * 사용자의 연동 계좌 목록 조회
	 * @param memberId 요청자의 member_id
	 * @return 연동 계좌 목록
	 */
	@Override
	public SyncAccountsLoadResponse syncAccountsLoad(Long memberId) {
		List<SyncAccountsDetail> syncAccounts = syncAccountRepository.memberSyncAccountsLoad(memberId);
		return SyncAccountsLoadResponse.builder()
			.syncAccountsDetail(syncAccounts)
			.build();
	}

	/**
	 * 요청자의 은행 계좌 목록 반환
	 * @param memberId 요청자 member_id
	 * @return 은행 계좌 목록
	 */
	@Override
	public BankAccountsLoadResponse bankAccountsLoad(Long memberId) {
		Member member = getMember(memberId);
		TwinkleBankAccountsLoadResponse twinkleBankAccountsLoadResponse = twinkleBankAccountsLoad(member);

		List<BankAccountsDetail> bankAccountsDetails = twinkleBankAccountsLoadResponse.twinkleBankAccountsDetails()
			.stream()
			.map(twinkleBankAccountsDetail ->
				BankAccountsDetail.builder()
					.uuid(twinkleBankAccountsDetail.uuid())
					.name(twinkleBankAccountsDetail.name())
					.num(twinkleBankAccountsDetail.num())
					.balance(twinkleBankAccountsDetail.balance())
					.build()
			).toList();
		return BankAccountsLoadResponse.builder()
			.bankAccountsDetails(bankAccountsDetails)
			.build();
	}

	private TwinkleBankAccountsLoadResponse twinkleBankAccountsLoad(Member member) {
		TwinkleBankAccountsLoadRequest twinkleBankAccountsLoadRequest = TwinkleBankAccountsLoadRequest.builder()
			.uuid(member.getUuid())
			.build();
		return twinkleBankClient.bankAccountsLoad(
			twinkleBankAccountsLoadRequest);
	}

	private Member getMember(Long memberId) {
		return memberRepository.findById(memberId)
			.orElseThrow(
				() -> new NotFoundException("BankAccountsLoad", ErrorCode.UNDEFINED_MEMBER)
			);
	}

	/**
	 * 사용자의 연동 계좌의 주계좌 설정 변경
	 * @param memberId 요청자의 member_id
	 * @param mainSyncAccountUpdateRequest PIN 인증 요청과 요청 계좌 번호
	 */
	@Transactional
	@Override
	public void mainSyncAccountUpdate(Long memberId, MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest) {
		pinVerifyCheck(memberId, mainSyncAccountUpdateRequest);
		deactivateCurrentMainSyncAccount(memberId);
		activateNewMainSyncAccount(mainSyncAccountUpdateRequest);
	}

	private void pinVerifyCheck(Long memberId, MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest) {
		PinVerifyRequest pinVerifyRequest = PinVerifyRequest.builder()
			.pinNum(mainSyncAccountUpdateRequest.pinNum())
			.build();
		authUtils.pinVerify(memberId, pinVerifyRequest);
	}

	private void deactivateCurrentMainSyncAccount(Long memberId) {
		SyncAccount syncAccount = syncAccountRepository.findByMemberIdAndIsMain(memberId, true)
			.orElseThrow(
				() -> new NotFoundException("MainSyncAccountUpdate", ErrorCode.SYNC_ACCOUNTS_NOT_FOUND, memberId)
			);
		syncAccount.updateIsMain(false);
	}

	private void activateNewMainSyncAccount(MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest) {
		SyncAccount requestSyncAccount = syncAccountRepository.findByUuid(mainSyncAccountUpdateRequest.uuid())
			.orElseThrow(
				() -> new BadRequestException("MainSyncAccountUpdate", ErrorCode.SYNC_ACCOUNT_BAD_REQUEST,
					mainSyncAccountUpdateRequest.uuid())
			);
		requestSyncAccount.updateIsMain(true);
	}
}
