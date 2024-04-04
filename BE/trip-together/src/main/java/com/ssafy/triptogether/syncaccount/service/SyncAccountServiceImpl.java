package com.ssafy.triptogether.syncaccount.service;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.validator.pin.PinVerify;
import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.exceptions.category.ForbiddenException;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.infra.twinklebank.TwinkleBankAuth;
import com.ssafy.triptogether.infra.twinklebank.TwinkleBankClient;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleAccountSyncRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankAccountsLoadRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankTransfer1wonRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankVerify1wonRequest;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleAccountSyncResponse;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleBankAccountsLoadResponse;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.member.utils.MemberUtils;
import com.ssafy.triptogether.syncaccount.data.request.MainSyncAccountUpdateRequest;
import com.ssafy.triptogether.syncaccount.data.request.SyncAccountDeleteRequest;
import com.ssafy.triptogether.syncaccount.data.request.SyncAccountSaveRequest;
import com.ssafy.triptogether.syncaccount.data.request.Transfer1wonRequest;
import com.ssafy.triptogether.syncaccount.data.request.Verify1wonRequest;
import com.ssafy.triptogether.syncaccount.data.response.BankAccountsDetail;
import com.ssafy.triptogether.syncaccount.data.response.BankAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsDetail;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.data.response.Transfer1wonResponse;
import com.ssafy.triptogether.syncaccount.domain.SyncAccount;
import com.ssafy.triptogether.syncaccount.repository.SyncAccountRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class SyncAccountServiceImpl implements SyncAccountLoadService, SyncAccountSaveService {
	// Repository
	private final SyncAccountRepository syncAccountRepository;
	private final MemberRepository memberRepository;
	// Client
	private final TwinkleBankClient twinkleBankClient;
	private final TwinkleBankAuth twinkleBankAuth;

	@Value("${app.clientId}")
	private String TWINKLE_CLIENT_ID;

	/**
	 * 요청자의 은행 계좌 목록 반환
	 *
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
	 *
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
	 *
	 * @param memberId                     요청자의 member_id
	 * @param mainSyncAccountUpdateRequest 주계좌 변경 요청
	 */
	@Transactional
	@Override
	public void mainSyncAccountUpdate(Long memberId, MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest) {
		deactivateCurrentMainSyncAccount(memberId, mainSyncAccountUpdateRequest);
		activateNewMainSyncAccount(memberId, mainSyncAccountUpdateRequest);
	}

	/**
	 * 연동 계좌 등록 요청
	 *
	 * @param memberId               요청자의 member_id
	 * @param pinVerifyRequest       PIN 인증 요청
	 * @param syncAccountSaveRequest 연동하고자 하는 계좌
	 */
	@PinVerify
	@Transactional
	@Override
	public void syncAccountSave(Long memberId, PinVerifyRequest pinVerifyRequest,
		SyncAccountSaveRequest syncAccountSaveRequest) {
		Member member = MemberUtils.findByMemberId(memberRepository, memberId);
		TwinkleAccountSyncResponse twinkleAccountSyncResponse = twinkleAccountSync(member.getUuid(),
			syncAccountSaveRequest);

		if (!syncAccountRepository.memberSyncAccountExist(memberId)) {
			syncAccountSave(twinkleAccountSyncResponse, member, true);
			return;
		}
		syncAccountSave(twinkleAccountSyncResponse, member, syncAccountSaveRequest.isMain());
	}

	/**
	 * 연동 계좌 해지
	 *
	 * @param memberId                 요청자 member_id
	 * @param pinVerifyRequest         PIN 인증 요청
	 * @param syncAccountDeleteRequest 해지 요청 계좌
	 */
	@PinVerify
	@Transactional
	@Override
	public void syncAccountDelete(Long memberId, PinVerifyRequest pinVerifyRequest,
		SyncAccountDeleteRequest syncAccountDeleteRequest) {
		SyncAccount syncAccount = getSyncAccountByUuid(syncAccountDeleteRequest.bankAccountUuid());
		Member member = MemberUtils.findByMemberId(memberRepository, memberId);
		syncAccountForbiddenCheck(member, syncAccount, "SyncAccountDelete");
		syncAccountRepository.delete(syncAccount);
		twinkleAccountSyncDelete(member.getUuid(), syncAccountDeleteRequest);
	}

	private void syncAccountForbiddenCheck(Member member, SyncAccount syncAccount, String detailMessageKey) {
		if (!member.getId().equals(syncAccount.getMember().getId())) {
			throw new ForbiddenException(detailMessageKey, ErrorCode.FORBIDDEN_ACCESS_MEMBER);
		}
	}

	private void twinkleAccountSyncDelete(String memberUuid, SyncAccountDeleteRequest syncAccountDeleteRequest) {
		TwinkleAccountSyncRequest twinkleAccountSyncRequest = TwinkleAccountSyncRequest.builder()
			.accountUuid(syncAccountDeleteRequest.bankAccountUuid())
			.uuid(memberUuid)
			.build();
		twinkleBankClient.bankAccountSyncDelete(twinkleAccountSyncRequest);
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

	private TwinkleAccountSyncResponse twinkleAccountSync(String memberUuid,
		SyncAccountSaveRequest syncAccountSaveRequest) {
		TwinkleAccountSyncRequest twinkleAccountSyncRequest = TwinkleAccountSyncRequest.builder()
			.accountUuid(syncAccountSaveRequest.bankAccountUuid())
			.uuid(memberUuid)
			.build();
		return twinkleBankClient.bankAccountsSync(twinkleAccountSyncRequest);
	}

	private void deactivateCurrentMainSyncAccount(Long memberId,
		MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest) {
		syncAccountRepository.findByMemberIdAndIsMain(memberId, true)
			.ifPresent(syncAccount -> {
				if (syncAccount.equals(getSyncAccountByUuid(mainSyncAccountUpdateRequest.uuid()))) {
					throw new BadRequestException("MainSyncAccountUpdate", ErrorCode.SYNC_ACCOUNT_MAIN_BAD_REQUEST);
				}
				syncAccount.updateIsMain(false);
			});
	}

	private void activateNewMainSyncAccount(Long memberId, MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest) {
		SyncAccount syncAccount = getSyncAccountByUuid(mainSyncAccountUpdateRequest.uuid());
		Member member = MemberUtils.findByMemberId(memberRepository, memberId);
		syncAccountForbiddenCheck(member, syncAccount, "MainSyncAccountUpdate");
		syncAccount.updateIsMain(true);
	}

	private SyncAccount getSyncAccountByUuid(String uuid) {
		return syncAccountRepository.findByUuid(uuid)
			.orElseThrow(
				() -> new NotFoundException("MainSyncAccountUpdate", SYNC_ACCOUNT_NOT_FOUND, uuid)
			);
	}

	@Transactional
	@Override
	public Transfer1wonResponse transfer1won(Long memberId, String memberUuid, Transfer1wonRequest request) {

		TwinkleBankTransfer1wonRequest twinkleBankTransfer1wonRequest = TwinkleBankTransfer1wonRequest.builder()
			.accountUuid(request.accountUuid())
			.clientId(TWINKLE_CLIENT_ID)
			.build();

		return twinkleBankAuth.transfer1won(twinkleBankTransfer1wonRequest, memberUuid);
	}

	@Override
	public void verify1won(Long memberId, String memberUuid, Verify1wonRequest request) {

		TwinkleBankVerify1wonRequest twinkleBankVerify1wonRequest = TwinkleBankVerify1wonRequest.builder()
			.clientId(TWINKLE_CLIENT_ID)
			.accountUuid(request.accountUuid())
			.code(request.code())
			.build();
		twinkleBankAuth.verify1won(twinkleBankVerify1wonRequest, memberUuid);
	}
}
