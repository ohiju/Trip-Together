package com.ssafy.twinklebank.account.service;

import com.ssafy.twinklebank.account.data.request.AccountDeleteRequest;
import com.ssafy.twinklebank.account.data.request.AddAccountRequest;
import com.ssafy.twinklebank.account.data.request.DepositWithdrawRequest;
import com.ssafy.twinklebank.account.data.request.Transfer1wonRequest;

public interface AccountSaveService {
    void addLinkedAccount(String clientId, AddAccountRequest addAccountRequest);

    void deleteLinkedAccount(String clientId, long memberId, AccountDeleteRequest accountDeleteRequest);

    void deposit(long memberId, DepositWithdrawRequest request);

    void withdraw(long memberId, DepositWithdrawRequest request);

    void transfer1won(long memberId, Transfer1wonRequest request);
}
