package com.ssafy.twinklebank.account.repository.query;

import com.ssafy.twinklebank.account.data.AccountResponse;

import java.util.List;

public interface AccountRepositoryCustom {
    List<AccountResponse> getAccountList(String tranId);
}
