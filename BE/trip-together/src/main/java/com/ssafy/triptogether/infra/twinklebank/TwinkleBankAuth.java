package com.ssafy.triptogether.infra.twinklebank;

import java.util.Map;

import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankTransfer1wonRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankVerify1wonRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleTokenRequest;
import com.ssafy.triptogether.syncaccount.data.response.Transfer1wonResponse;

public interface TwinkleBankAuth {
	Map<String, String> getTwinkleBankToken(TwinkleTokenRequest twinkleTokenRequest, String code);

	Transfer1wonResponse transfer1won(TwinkleBankTransfer1wonRequest twinkleBankTransfer1wonRequest, String memberUuid);

	void verify1won(TwinkleBankVerify1wonRequest twinkleBankVerify1wonRequest, String memberUuid);
	void reissueBank(String memberUuid);
}
