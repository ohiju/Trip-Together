package com.ssafy.triptogether.infra.twinklebank;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.ssafy.triptogether.global.exception.exceptions.category.ExternalServerException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankAccountsLoadRequest;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleBankAccountsLoadResponse;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class TwinkleBankClientImpl implements TwinkleBankClient {
	private final RestTemplate restTemplate;
	static final String TWINKLE_BANK_URI = "";

	/**
	 * 요청자의 은행 계좌 목록 조회 요청
	 * @param twinkleBankAccountsLoadRequest 요청자 정보
	 * @return 은행 계좌 목록
	 */
	@Override
	public TwinkleBankAccountsLoadResponse bankAccountsLoad(
		TwinkleBankAccountsLoadRequest twinkleBankAccountsLoadRequest) {
		// Todo: twinkleBankAccountsLoadRequest 에서 uuid 를 뽑아서 Redis 에서 access_token 조회

		String url = UriComponentsBuilder.fromHttpUrl(TWINKLE_BANK_URI + "/account/v1/accounts")
			.queryParam("여행 클라이언트 키")
			.toUriString();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "Bearer " + "access_token");
		HttpEntity<String> entity = new HttpEntity<>(headers);

		ResponseEntity<TwinkleBankAccountsLoadResponse> response = restTemplate.exchange(
			url,
			HttpMethod.GET,
			entity,
			TwinkleBankAccountsLoadResponse.class
		);

		if (response.getStatusCode() == HttpStatus.OK) {
			return response.getBody();
		}

		throw new ExternalServerException("TwinkleBankAccountsLoad", ErrorCode.TWINKLE_BANK_SERVER_ERROR);
	}
}
