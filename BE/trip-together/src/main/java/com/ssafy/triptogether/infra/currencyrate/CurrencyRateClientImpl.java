package com.ssafy.triptogether.infra.currencyrate;

import org.springframework.stereotype.Component;

import com.ssafy.triptogether.infra.data.response.CurrencyRateResponse;

@Component
public class CurrencyRateClientImpl implements CurrencyRateClient{

	/**
	 * 환율 정보 조회
	 * @return 환율 전체 정보
	 */
	@Override
	public CurrencyRateResponse currencyRatesLoad() {
		return null;
	}
}
