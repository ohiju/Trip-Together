package com.ssafy.triptogether.tripaccount.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.RateLoadResponse;
import com.ssafy.triptogether.tripaccount.domain.Currency;
import com.ssafy.triptogether.tripaccount.domain.CurrencyNation;
import com.ssafy.triptogether.tripaccount.repository.CurrencyRepository;

@ExtendWith(MockitoExtension.class)
class TripAccountServiceImplTest {
	@InjectMocks
	TripAccountServiceImpl tripAccountService;
	@Mock
	CurrencyRepository currencyRepository;

	@Nested
	@MockitoSettings(strictness = Strictness.LENIENT)
	@DisplayName("환전 가능 통화 목록 조회")
	class CurrenciesLoadTest {
		List<Currency> testCurrencies;

		@BeforeEach
		void setUp() {
			Currency currency1 = Currency.builder()
				.code("EUR")
				.currencyNation(CurrencyNation.EUR)
				.unit(8356)
				.rate(365.1)
				.build();
			Currency currency2 = Currency.builder()
				.code("GBP")
				.currencyNation(CurrencyNation.UK)
				.unit(163)
				.rate(255.5)
				.build();

			testCurrencies = Arrays.asList(currency1, currency2);
			// given
			given(currencyRepository.findAll()).willReturn(testCurrencies);
		}

		@Test
		@DisplayName("전체 통화 목록 조회 성공")
		void currenciesLoadSuccess() {
			// when
			CurrenciesLoadResponse response = tripAccountService.currenciesLoad();
			// then
			assertAll(
				() -> assertNotNull(response, "응답은 null 이 아니어야 합니다."),
				() -> assertEquals(2, response.currenciesDetailResponse().size(), "통화 목록의 크기가 예상과 다릅니다."),
				() -> assertEquals("EUR", response.currenciesDetailResponse().get(0).code(), "첫 번째 통화 코드가 예상과 다릅니다."),
				() -> assertEquals("유럽", response.currenciesDetailResponse().get(0).nationKr(), "첫 번째 통화의 한국어 국가명이 예상과 다릅니다.")
			);
		}

		@Test
		@DisplayName("통화 환율 조회 실패")
		void currencyRateLoadFail() {
			// given
			given(currencyRepository.findByCode("USD")).willReturn(Optional.empty());
			// when & then
			assertThrows(NotFoundException.class, () -> {
				tripAccountService.rateLoad("USD");
			});
		}

		@Test
		@DisplayName("통화 환율 조회 성공")
		void currencyRateLoadSuccess() {
			// given
			given(currencyRepository.findByCode("GBP")).willReturn(Optional.ofNullable(testCurrencies.get(1)));
			// when
			RateLoadResponse rateLoadResponse = tripAccountService.rateLoad("GBP");
			// then
			assertEquals(testCurrencies.get(1).getRate(), rateLoadResponse.rate());
		}
	}
}