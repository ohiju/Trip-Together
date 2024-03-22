package com.ssafy.triptogether.tripaccount.service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.infra.currencyrate.CurrencyRateClient;
import com.ssafy.triptogether.infra.currencyrate.data.response.CurrencyRateResponse;
import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadDetail;
import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.RateLoadResponse;
import com.ssafy.triptogether.tripaccount.domain.Currency;
import com.ssafy.triptogether.tripaccount.repository.CurrencyRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TripAccountServiceImpl implements TripAccountLoadService, TripAccountSaveService {
	private final CurrencyRepository currencyRepository;
	private final CurrencyRateClient currencyRateClient;

	/**
	 * 환전 가능 통화 목록을 조회하는 메서드
	 * @return 환전 가능 통화 목록
	 */
	@Override
	public CurrenciesLoadResponse currenciesLoad() {
		List<Currency> currencies = currencyRepository.findAll();
		List<CurrenciesLoadDetail> collectCurrencies = currencies.stream()
			.map(
				currency -> CurrenciesLoadDetail.builder()
					.code(currency.getCode())
					.nation(currency.getCurrencyNation().name())
					.nationKr(currency.getCurrencyNation().getMessage())
					.unit(currency.getUnit())
					.build()
			).toList();
		return CurrenciesLoadResponse.builder()
			.currenciesLoadDetail(collectCurrencies)
			.build();
	}

	/**
	 * 해당 통화 코드의 환율 정보 반환
	 * @param currencyCode 요청 통화 코드
	 * @return 환율 정보
	 */
	@Override
	public RateLoadResponse rateLoad(String currencyCode) {
		Currency currency = currencyRepository.findByCode(currencyCode)
			.orElseThrow(
				() -> new NotFoundException("RateLoad", ErrorCode.CURRENCY_NOT_FOUND, currencyCode)
			);
		return RateLoadResponse.builder()
			.rate(currency.getRate())
			.build();
	}

	/**
	 * 전체 통화 코드의 환율 정보 업데이트
	 */
	@Transactional
	@Override
	public void currencyRateUpdate() {
		List<CurrencyRateResponse> currencyRateResponses = currencyRateClient.currencyRatesLoad();
		Map<String, Currency> currencyMap = currencyRepository.findAll()
			.stream()
			.collect(Collectors.toMap(Currency::getCode, Function.identity()));
		currencyRateResponses.forEach(currencyRateResponse -> {
			Currency currency = currencyMap.get(currencyRateResponse.cur_unit());
			if (currency != null) {
				currency.updateRate(Double.valueOf(currencyRateResponse.dealBasR()));
			}
		});
	}
}
