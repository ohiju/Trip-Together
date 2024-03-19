package com.ssafy.twinklebank.account.service;

import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.data.GetAccountListRequest;

import java.util.List;

public interface AccountLoadService {
    List<AccountResponse> getAccounts(GetAccountListRequest getAccountListRequest, long memberId);
}
