package com.ssafy.twinklebank.account.repository.query;

import com.ssafy.twinklebank.account.data.response.AccountResponse;

import java.util.List;

public interface AccountRepositoryCustom {
    List<AccountResponse> getAccountList(String clientId, long memberId);

}
