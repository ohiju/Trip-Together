package com.ssafy.triptogether.syncaccount.service;

import com.ssafy.triptogether.syncaccount.data.request.Transfer1wonRequest;
import com.ssafy.triptogether.syncaccount.data.request.Verify1wonRequest;
import com.ssafy.triptogether.syncaccount.data.response.BankAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsLoadResponse;

public interface SyncAccountLoadService {
	SyncAccountsLoadResponse syncAccountsLoad(Long memberId);

	BankAccountsLoadResponse bankAccountsLoad(Long memberId);

	void transfer1won(Long memberId, String memberUuid, Transfer1wonRequest request);

	void verify1won(Long memberId, String memberUuid, Verify1wonRequest request);
}
