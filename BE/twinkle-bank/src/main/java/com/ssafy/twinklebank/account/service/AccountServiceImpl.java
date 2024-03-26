package com.ssafy.twinklebank.account.service;

import com.ssafy.twinklebank.account.aop.DistributedLock;
import com.ssafy.twinklebank.account.data.AccountDeleteRequest;
import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.data.AddAccountRequest;
import com.ssafy.twinklebank.account.data.DepositWithdrawRequest;
import com.ssafy.twinklebank.account.data.Transfer1wonRequest;
import com.ssafy.twinklebank.account.domain.Account;
import com.ssafy.twinklebank.account.domain.AccountHistory;
import com.ssafy.twinklebank.account.domain.Type;
import com.ssafy.twinklebank.account.domain.WithdrawalAgreement;
import com.ssafy.twinklebank.account.repository.AccountHistoryRepository;
import com.ssafy.twinklebank.account.repository.AccountRepository;
import com.ssafy.twinklebank.account.repository.WithdrawalAgreementRepository;
import com.ssafy.twinklebank.application.domain.Application;
import com.ssafy.twinklebank.application.repository.ApplicationRepository;
import com.ssafy.twinklebank.application.utils.ApplicationUtils;
import com.ssafy.twinklebank.auth.provider.CodeProvider;
import com.ssafy.twinklebank.global.exception.exceptions.category.ForbiddenException;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class AccountServiceImpl implements AccountLoadService, AccountSaveService {

	private final AccountRepository accountRepository;
	private final WithdrawalAgreementRepository withdrawalAgreementRepository;
	private final ApplicationRepository applicationRepository;
	private final AccountHistoryRepository accountHistoryRepository;
	private final MemberRepository memberRepository;
	private final CodeProvider codeProvider;
	private final StringRedisTemplate redisTemplate;

	private final long CODE_EXPIRE_TIME = 10 * 60 * 1000L; // 10분

    @Override
    public List<AccountResponse> getAccounts(String clientId, long memberId) {
        return accountRepository.getAccountList(clientId, memberId);
    }

    @Override
    public double getBalance(long memberId, String accountId) {
        Account account = findAccountByUuid(accountId);
        if (account.getMember().getId() != memberId) {
            throw new ForbiddenException("getBalance", FORBIDDEN, memberId);
        }
        return account.getBalance();
    }

    @Transactional
    @Override
    public void addLinkedAccount(String clientId, AddAccountRequest addAccountRequest) {
        // Account Not Found
        Account account = findAccountByUuid(addAccountRequest.accountUuid());

        Application application = ApplicationUtils.getApplication(applicationRepository, clientId);

        WithdrawalAgreement withdrawalAgreement = WithdrawalAgreement.builder()
            .account(account)
            .application(application)
            .build();

        withdrawalAgreementRepository.save(withdrawalAgreement);
    }

    @Transactional
    @Override
    public void deleteLinkedAccount(String clientId, long memberId, AccountDeleteRequest accountDeleteRequest) {
        // find account & application & withdrawal agreement
        Account account = findAccountByUuid(accountDeleteRequest.accountUuid());
        Application application = ApplicationUtils.getApplication(applicationRepository, clientId);
        WithdrawalAgreement withdrawalAgreement = withdrawalAgreementRepository.findByAccountAndApplication(account, application)
                .orElseThrow(() -> new NotFoundException("LinkedAccountDelete", UNDEFINED_WITHDRAWAL_AGREEMENT));

        // delete withdrawal agreement
        withdrawalAgreementRepository.delete(withdrawalAgreement);
    }

    @DistributedLock(key = "#request.type().toString().concat('-').concat('#request.accountUuid()')")
    @Transactional
    @Override
    public void deposit(long memberId, DepositWithdrawRequest request) {
        // find account
        Account account = findAccountByUuid(request.accountUuid());

        // validate account
        if (account.getMember().getId() != memberId) {
            throw new ForbiddenException("Deposit", MEMBER_NOT_AUTHORIZED);
        }

        // create account history & save
        AccountHistory accountHistory = AccountHistory.builder()
                .account(account)
                .type(request.type())
                .businessName(request.businessName())
                .address(request.address())
                .price(request.price())
                .build();
        accountHistoryRepository.save(accountHistory);

        // increase balance & update
        account.increase(request.price());
    }

    @DistributedLock(key = "#request.type().toString().concat('-').concat('#request.accountUuid()')")
    @Transactional
    @Override
    public void withdraw(long memberId, DepositWithdrawRequest request) {
        // find account
        Account account = findAccountByUuid(request.accountUuid());

        // validate account
        if (account.getMember().getId() != memberId) {
            throw new ForbiddenException("Withdraw", MEMBER_NOT_AUTHORIZED);
        }

        // create account history & save
        AccountHistory accountHistory = AccountHistory.builder()
            .account(account)
            .type(request.type())
            .businessName(request.businessName())
            .address(request.address())
            .price(request.price())
            .build();
        accountHistoryRepository.save(accountHistory);

        // decrease balance & update
        account.decrease(request.price());
    }

	@Transactional
	@Override
	public void transfer1won(long memberId, Transfer1wonRequest request) {
		// client id가 존재하는지 확인
		Application application = ApplicationUtils.getApplication(applicationRepository, request.clientId());

		// account uuid로 계좌 찾기
		Account account = accountRepository.findAccountByUuid(request.accountUuid())
			.orElseThrow(
				() -> new NotFoundException("accountService - transfer1won ", ACCOUNT_NOT_FOUND)
			);

		// 1원 인증 코드
		String code = codeProvider.generateKoreanCode(4);

		DepositWithdrawRequest depositWithdrawRequest = DepositWithdrawRequest.builder()
			.accountUuid(request.accountUuid())
			.type(Type.DEPOSIT)
			.price(1.0)
			.businessName(code)
			.address("twinkle bank")
			.build();

		// 계좌에 1원 넣어주기
		deposit(memberId, depositWithdrawRequest);

		// 코드 10분간 저장하기
		saveCode(request.accountUuid(), code);
	}

	private Account findAccountByUuid(String accountUuid) {
		return accountRepository.findAccountByUuid(accountUuid)
			.orElseThrow(() -> new NotFoundException("addLinkedAccount: account", ACCOUNT_NOT_FOUND, accountUuid));
	}

	private void saveCode(String accountUuid, String code) {
		redisTemplate.opsForValue()
			.set("1won:" + accountUuid, code,
				CODE_EXPIRE_TIME, TimeUnit.MILLISECONDS);
	}
}
