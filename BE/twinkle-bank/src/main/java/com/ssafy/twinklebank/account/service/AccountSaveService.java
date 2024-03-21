package com.ssafy.twinklebank.account.service;

import com.ssafy.twinklebank.account.data.AddAccountRequest;

public interface AccountSaveService {
    void addLinkedAccount(String clientId, AddAccountRequest addAccountRequest);
}
