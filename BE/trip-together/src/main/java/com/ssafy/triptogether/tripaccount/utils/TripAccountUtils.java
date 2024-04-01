package com.ssafy.triptogether.tripaccount.utils;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.tripaccount.domain.Currency;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;
import com.ssafy.triptogether.tripaccount.domain.TripAccount;
import com.ssafy.triptogether.tripaccount.repository.CurrencyRepository;
import com.ssafy.triptogether.tripaccount.repository.TripAccountRepository;

public class TripAccountUtils {
	public static TripAccount findByMemberIdAndCurrencyId(TripAccountRepository repository, long memberId,
		long currencyId) {
		return repository.findByMemberIdAndCurrencyId(memberId, currencyId)
			.orElseThrow(
				() -> new NotFoundException("TripAccountFindByMemberIdAndCurrencyId", ErrorCode.TRIP_ACCOUNT_NOT_FOUND)
			);
	}

	public static Currency findByCurrencyCode(CurrencyRepository repository, CurrencyCode currencyCode) {
		return repository.findByCode(currencyCode)
			.orElseThrow(
				() -> new NotFoundException("CurrencyFindByCurrencyCode", ErrorCode.CURRENCY_NOT_FOUND)
			);
	}
}
