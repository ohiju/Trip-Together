package com.ssafy.triptogether.syncaccount.service;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.syncaccount.data.request.MainSyncAccountUpdateRequest;

public interface SyncAccountSaveService {
	void mainSyncAccountUpdate(Long memberId, PinVerifyRequest pinVerifyRequest, MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest);
}
