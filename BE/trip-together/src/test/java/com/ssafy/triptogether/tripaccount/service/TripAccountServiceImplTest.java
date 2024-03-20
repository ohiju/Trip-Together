package com.ssafy.triptogether.tripaccount.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
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
	@DisplayName("환전 가능 통화 목록 조회")
	class CurrenciesLoadTest {
		List<Currency> testCurrencies;

		@BeforeEach
		void setUp() {
			Currency currency1 = Currency.builder()
				.code("EUR")
				.currencyNation(CurrencyNation.EUR)
				.unit(8356)
				.build();
			Currency currency2 = Currency.builder()
				.code("UK")
				.currencyNation(CurrencyNation.UK)
				.unit(163)
				.build();

			testCurrencies = Arrays.asList(currency1, currency2);
			// given
			given(currencyRepository.findAll()).willReturn(testCurrencies);
		}

		@Test
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
	}
}