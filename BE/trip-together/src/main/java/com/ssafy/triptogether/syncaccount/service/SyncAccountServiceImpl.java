package com.ssafy.triptogether.syncaccount.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.utils.AuthUtils;
import com.ssafy.triptogether.auth.validator.pin.PinVerify;
import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.infra.twinklebank.TwinkleBankClient;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleAccountSyncRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankAccountsLoadRequest;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleAccountSyncResponse;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleBankAccountsLoadResponse;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.member.utils.MemberUtils;
import com.ssafy.triptogether.syncaccount.data.request.MainSyncAccountUpdateRequest;
import com.ssafy.triptogether.syncaccount.data.request.SyncAccountSaveRequest;
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
	// Repository
	private final SyncAccountRepository syncAccountRepository;
	private final MemberRepository memberRepository;
	// Client
	private final TwinkleBankClient twinkleBankClient;

	/**
	 * 요청자의 은행 계좌 목록 반환
	 * @param memberId 요청자 member_id
	 * @return 은행 계좌 목록
	 */
	@Override
	public BankAccountsLoadResponse bankAccountsLoad(Long memberId) {
		Member member = MemberUtils.findByMemberId(memberRepository, memberId);
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
	 * 사용자의 연동 계좌의 주계좌 설정 변경
	 * @param memberId 요청자의 member_id
	 * @param pinVerifyRequest PIN 인증 요청
	 * @param mainSyncAccountUpdateRequest 주계좌 변경 요청
	 */
	@PinVerify
	@Transactional
	@Override
	public void mainSyncAccountUpdate(Long memberId, PinVerifyRequest pinVerifyRequest, MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest) {
		deactivateCurrentMainSyncAccount(memberId);
		activateNewMainSyncAccount(mainSyncAccountUpdateRequest);
	}

	/**
	 * 연동 계좌 등록 요청
	 * @param memberId 요청자의 member_id
	 * @param pinVerifyRequest PIN 인증 요청
	 * @param syncAccountSaveRequest 연동하고자 하는 계좌
	 */
	@PinVerify
	@Transactional
	@Override
	public void syncAccountSave(Long memberId, PinVerifyRequest pinVerifyRequest,
		SyncAccountSaveRequest syncAccountSaveRequest) {
		TwinkleAccountSyncResponse twinkleAccountSyncResponse = twinkleAccountSync(syncAccountSaveRequest);
		Member member = MemberUtils.findByMemberId(memberRepository, memberId);

		if (!syncAccountRepository.memberSyncAccountExist(memberId)){
			syncAccountSave(twinkleAccountSyncResponse, member, true);
			return;
		}
		syncAccountSave(twinkleAccountSyncResponse, member, syncAccountSaveRequest.isMain());
	}

	private void syncAccountSave(TwinkleAccountSyncResponse twinkleAccountSyncResponse, Member member, Boolean isMain) {
		SyncAccount syncAccount = SyncAccount.builder()
			.name(twinkleAccountSyncResponse.accountName())
			.num(twinkleAccountSyncResponse.accountNum())
			.uuid(twinkleAccountSyncResponse.accountUuid())
			.isMain(isMain)
			.member(member)
			.build();
		syncAccountRepository.save(syncAccount);
	}

	private TwinkleBankAccountsLoadResponse twinkleBankAccountsLoad(Member member) {
		TwinkleBankAccountsLoadRequest twinkleBankAccountsLoadRequest = TwinkleBankAccountsLoadRequest.builder()
			.uuid(member.getUuid())
			.build();
		return twinkleBankClient.bankAccountsLoad(
			twinkleBankAccountsLoadRequest);
	}

	private TwinkleAccountSyncResponse twinkleAccountSync(SyncAccountSaveRequest syncAccountSaveRequest) {
		TwinkleAccountSyncRequest twinkleAccountSyncRequest = TwinkleAccountSyncRequest.builder()
			.accountUuid(syncAccountSaveRequest.bankAccountUuid())
			.build();
		return twinkleBankClient.bankAccountsSync(twinkleAccountSyncRequest);
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
