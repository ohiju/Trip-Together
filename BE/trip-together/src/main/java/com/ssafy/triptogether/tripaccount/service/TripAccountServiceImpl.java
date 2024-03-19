package com.ssafy.triptogether.tripaccount.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.infra.currencyrate.CurrencyRateClient;
import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadDetailResponse;
import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.RateLoadResponse;
import com.ssafy.triptogether.tripaccount.domain.Currency;
import com.ssafy.triptogether.tripaccount.repository.CurrencyRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TripAccountServiceImpl implements TripAccountLoadService {
	private final CurrencyRepository currencyRepository;
	private final CurrencyRateClient currencyRateClient;

	/**
	 * 환전 가능 통화 목록을 조회하는 메서드
	 * @return 환전 가능 통화 목록
	 */
	@Override
	public CurrenciesLoadResponse currenciesLoad() {
		List<Currency> currencies = currencyRepository.findAll();
		List<CurrenciesLoadDetailResponse> collectCurrencies = currencies.stream()
			.map(
				currency -> CurrenciesLoadDetailResponse.builder()
					.code(currency.getCode())
					.nation(currency.getCurrencyNation().name())
					.nationKr(currency.getCurrencyNation().getMessage())
					.unit(currency.getUnit())
					.build()
			).toList();
		return CurrenciesLoadResponse.builder()
			.currenciesLoadDetailResponse(collectCurrencies)
			.build();
	}

	/**
	 * 해당 통화 코드의 환율 정보 반환
	 * @param currencyCode 요청 통화 코드
	 * @return 환율 정보
	 */
	@Override
	public RateLoadResponse rateLoad(String currencyCode) {
		currencyRateClient.currencyRatesLoad();
		Currency currency = currencyRepository.findByCode(currencyCode)
			.orElseThrow(
				() -> new NotFoundException("RateLoad", ErrorCode.CURRENCY_NOT_FOUND, currencyCode)
			);
		return RateLoadResponse.builder()
			.rate(currency.getRate())
			.build();
	}
}
