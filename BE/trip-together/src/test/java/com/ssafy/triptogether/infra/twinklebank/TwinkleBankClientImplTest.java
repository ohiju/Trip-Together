package com.ssafy.triptogether.infra.twinklebank;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

import java.util.List;

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
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.ssafy.triptogether.global.exception.exceptions.category.ExternalServerException;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankAccountsLoadRequest;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleBankAccountsDetail;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleBankAccountsLoadResponse;

@ExtendWith(MockitoExtension.class)
class TwinkleBankClientImplTest {
	@InjectMocks
	TwinkleBankClientImpl twinkleBankClient;
	@Mock
	RestTemplate restTemplate;

	@Nested
	@MockitoSettings(strictness = Strictness.LENIENT)
	@DisplayName("반짝 은행 계좌 목록 조회")
	class BankAccountsLoadTest {
		HttpHeaders headers = new HttpHeaders();
		TwinkleBankAccountsLoadRequest twinkleBankAccountsLoadRequest;
		TwinkleBankAccountsLoadResponse twinkleBankAccountsLoadResponse;

		@BeforeEach
		void setUp() {
			headers.set("Authorization", "Bearer access_token");
			twinkleBankAccountsLoadRequest = TwinkleBankAccountsLoadRequest.builder()
				.uuid("test")
				.build();
			TwinkleBankAccountsDetail bankAccount1 = TwinkleBankAccountsDetail.builder()
				.uuid("TestAccount1")
				.balance(3.0)
				.name("TestAccount1")
				.num("123-123")
				.build();
			TwinkleBankAccountsDetail bankAccount2 = TwinkleBankAccountsDetail.builder()
				.uuid("TestAccount2")
				.balance(3.0)
				.name("TestAccount2")
				.num("456-456")
				.build();
			twinkleBankAccountsLoadResponse = TwinkleBankAccountsLoadResponse.builder()
				.twinkleBankAccountsDetails(List.of(bankAccount1, bankAccount2))
				.build();
		}

		@Test
		@DisplayName("반짝 은행 계좌 목록 조회 성공")
		void bankAccountsLoadSuccess() {
			// given
			given(restTemplate.exchange(
				anyString(),
				eq(HttpMethod.GET),
				any(HttpEntity.class),
				eq(TwinkleBankAccountsLoadResponse.class)
			)).willReturn(new ResponseEntity<>(twinkleBankAccountsLoadResponse, HttpStatus.OK));
			// when
			TwinkleBankAccountsLoadResponse response = twinkleBankClient.bankAccountsLoad(
				twinkleBankAccountsLoadRequest);
			// then
			assertAll(
				() -> assertNotNull(response),
				() -> assertEquals(twinkleBankAccountsLoadResponse, response)
			);
		}

		@Test
		@DisplayName("반짝 은행 계좌 목록 조회 실패")
		void bankAccountsLoadFail() {
			// given
			given(restTemplate.exchange(
				anyString(),
				eq(HttpMethod.GET),
				any(HttpEntity.class),
				eq(TwinkleBankAccountsLoadResponse.class)
			)).willReturn(new ResponseEntity<>(null, HttpStatus.BAD_REQUEST));
			// when & then
			assertThrows(ExternalServerException.class, () -> {
				twinkleBankClient.bankAccountsLoad(twinkleBankAccountsLoadRequest);
			});
		}
	}
}