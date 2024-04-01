package com.ssafy.triptogether.infra.currencyrate;

import java.util.List;

import com.ssafy.triptogether.infra.currencyrate.data.response.CurrencyRateResponse;

public interface CurrencyRateClient {
	List<CurrencyRateResponse> currencyRatesLoad();
}
