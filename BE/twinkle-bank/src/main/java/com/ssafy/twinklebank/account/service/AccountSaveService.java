package com.ssafy.twinklebank.account.service;

import com.ssafy.twinklebank.account.data.request.*;
import com.ssafy.twinklebank.account.data.response.AddAccountResponse;

public interface AccountSaveService {
    void saveAccount(AccountSaveRequest accountSaveRequest);
    AddAccountResponse addLinkedAccount(String clientId, AddAccountRequest addAccountRequest);

    void deleteLinkedAccount(String clientId, long memberId, AccountDeleteRequest accountDeleteRequest);

    void deposit(long memberId, DepositWithdrawRequest request);

    void withdraw(long memberId, DepositWithdrawRequest request);

    void transfer1won(long memberId, Transfer1wonRequest request);
    void verify1won(Verify1wonRequest request);
}
