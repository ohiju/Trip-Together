package com.ssafy.triptogether.infra.twinklebank;

import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankTransfer1wonRequest;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleTokenRequest;

import java.util.Map;

public interface TwinkleBankAuth {
    Map<String, String> getTwinkleBankToken(TwinkleTokenRequest twinkleTokenRequest, String code);

    boolean transfer1won(TwinkleBankTransfer1wonRequest twinkleBankTransfer1wonRequest, String memberUuid);
}
