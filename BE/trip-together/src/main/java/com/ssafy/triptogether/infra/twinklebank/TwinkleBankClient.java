package com.ssafy.triptogether.infra.twinklebank;

import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankAccountsLoadRequest;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleBankAccountsLoadResponse;

public interface TwinkleBankClient {
	TwinkleBankAccountsLoadResponse bankAccountsLoad(TwinkleBankAccountsLoadRequest twinkleBankAccountsLoadRequest);
}
