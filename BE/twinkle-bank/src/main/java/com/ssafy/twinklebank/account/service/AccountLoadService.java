package com.ssafy.twinklebank.account.service;

import com.ssafy.twinklebank.account.data.AccountResponse;

import java.util.List;

public interface AccountLoadService {
    List<AccountResponse> getAccounts(String clientId, long memberId);

	double getBalance(long memberId, String accountId);
}
