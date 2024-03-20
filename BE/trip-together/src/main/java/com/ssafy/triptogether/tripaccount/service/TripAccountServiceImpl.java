package com.ssafy.triptogether.tripaccount.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssafy.triptogether.tripaccount.data.response.CurrenciesDetailResponse;
import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
import com.ssafy.triptogether.tripaccount.domain.Currency;
import com.ssafy.triptogether.tripaccount.repository.CurrencyRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TripAccountServiceImpl implements TripAccountLoadService {
	private final CurrencyRepository currencyRepository;

	/**
	 * 환전 가능 통화 목록을 조회하는 메서드
	 * @return 환전 가능 통화 목록
	 */
	@Override
	public CurrenciesLoadResponse currenciesLoad() {
		List<Currency> currencies = currencyRepository.findAll();
		List<CurrenciesDetailResponse> collectCurrencies = currencies.stream()
			.map(
				currency -> CurrenciesDetailResponse.builder()
					.code(currency.getCode())
					.nation(currency.getCurrencyNation().name())
					.nationKr(currency.getCurrencyNation().getMessage())
					.unit(currency.getUnit())
					.build()
			).toList();
		return CurrenciesLoadResponse.builder()
			.currenciesDetailResponse(collectCurrencies)
			.build();
	}
}
