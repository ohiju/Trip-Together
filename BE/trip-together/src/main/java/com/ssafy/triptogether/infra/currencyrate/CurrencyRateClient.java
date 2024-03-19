package com.ssafy.triptogether.infra.currencyrate;

import com.ssafy.triptogether.infra.data.response.CurrencyRateResponse;

public interface CurrencyRateClient {
	CurrencyRateResponse currencyRatesLoad();
}
