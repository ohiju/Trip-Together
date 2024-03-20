package com.ssafy.triptogether.infra.currencyrate;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.ssafy.triptogether.infra.data.response.CurrencyRateResponse;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class CurrencyRateClientImpl implements CurrencyRateClient{
	private final RestTemplate restTemplate;
	static final String CURRENCY_RATE_API_URL = "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON";
	static final String data = "AP01";
	@Value("${EXCHANGE_RATE_API_KEY}")
	private String authKey;

	/**
	 * 환율 정보 조회
	 *
	 * @return 환율 전체 정보
	 */
	@Override
	public List<CurrencyRateResponse> currencyRatesLoad() {
		String url = UriComponentsBuilder.fromHttpUrl(CURRENCY_RATE_API_URL)
			.queryParam("authkey", authKey)
			.queryParam("data", data)
			.toUriString();

		ResponseEntity<List<CurrencyRateResponse>> response = restTemplate.exchange(
			url,
			HttpMethod.GET,
			null,
			new ParameterizedTypeReference<>() {
			}
		);

		return response.getBody();
	}
}
