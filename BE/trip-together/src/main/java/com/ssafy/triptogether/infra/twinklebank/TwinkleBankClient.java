package com.ssafy.triptogether.infra.twinklebank;

import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleAccountSyncRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankAccountsLoadRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankLogoutRequest;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleAccountSyncResponse;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleBankAccountsLoadResponse;

public interface TwinkleBankClient {
	TwinkleBankAccountsLoadResponse bankAccountsLoad(TwinkleBankAccountsLoadRequest twinkleBankAccountsLoadRequest);
	TwinkleAccountSyncResponse bankAccountsSync(TwinkleAccountSyncRequest twinkleAccountSyncRequest);
	void bankAccountSyncDelete(TwinkleAccountSyncRequest twinkleAccountSyncRequest);

	void bankLogout(TwinkleBankLogoutRequest twinkleBankLogoutRequest);
}
