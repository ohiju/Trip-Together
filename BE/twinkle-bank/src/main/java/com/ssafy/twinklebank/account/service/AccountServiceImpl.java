package com.ssafy.twinklebank.account.service;

import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AccountServiceImpl implements AccountLoadService, AccountSaveService {

    private final AccountRepository accountRepository;
    @Override
    public List<AccountResponse> getAccounts(long clientId, long memberId) {
        return accountRepository.getAccountList(clientId, memberId);
    }
}
