package com.ssafy.twinklebank.account.service;

import com.ssafy.twinklebank.account.data.request.*;

public interface AccountSaveService {
    void saveAccount(long memberId, AccountSaveRequest accountSaveRequest);
    void addLinkedAccount(String clientId, AddAccountRequest addAccountRequest);

    void deleteLinkedAccount(String clientId, long memberId, AccountDeleteRequest accountDeleteRequest);

    void deposit(long memberId, DepositWithdrawRequest request);

    void withdraw(long memberId, DepositWithdrawRequest request);

    void transfer1won(long memberId, Transfer1wonRequest request);
    void verify1won(Verify1wonRequest request);
}
