package com.ssafy.twinklebank.account.service;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.data.AddAccountRequest;
import com.ssafy.twinklebank.account.domain.Account;
import com.ssafy.twinklebank.account.domain.WithdrawalAgreement;
import com.ssafy.twinklebank.account.repository.AccountRepository;
import com.ssafy.twinklebank.account.repository.WithdrawalAgreementRepository;
import com.ssafy.twinklebank.application.domain.Application;
import com.ssafy.twinklebank.application.repository.ApplicationRepository;
import com.ssafy.twinklebank.application.utils.ApplicationUtils;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AccountServiceImpl implements AccountLoadService, AccountSaveService {

    private final AccountRepository accountRepository;
    private final WithdrawalAgreementRepository withdrawalAgreementRepository;
    private final ApplicationRepository applicationRepository;

    @Override
    public List<AccountResponse> getAccounts(long clientId, long memberId) {
        return accountRepository.getAccountList(clientId, memberId);
    }

    @Override
    public void addLinkedAccount(String clientId, AddAccountRequest addAccountRequest) {
        // Account Not Found
        Account account = accountRepository.findAccountByUuid(addAccountRequest.accountUuid())
            .orElseThrow(() -> new NotFoundException("addLinkedAccount: account", ACCOUNT_NOT_FOUND, addAccountRequest.accountUuid()));

        Application application = ApplicationUtils.getApplication(applicationRepository, clientId);

        WithdrawalAgreement withdrawalAgreement = new WithdrawalAgreement(account, application);
        withdrawalAgreementRepository.save(withdrawalAgreement);
    }
}
