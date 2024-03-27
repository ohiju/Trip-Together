package com.ssafy.triptogether.syncaccount.service;

import com.ssafy.triptogether.syncaccount.data.request.Transfer1wonRequest;
import com.ssafy.triptogether.syncaccount.data.response.BankAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsLoadResponse;

public interface SyncAccountLoadService {
    SyncAccountsLoadResponse syncAccountsLoad(Long memberId);

    BankAccountsLoadResponse bankAccountsLoad(Long memberId);

    boolean transfer1won(Long memberId, String memberUuid, Transfer1wonRequest request);
}
