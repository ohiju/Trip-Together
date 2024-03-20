package com.ssafy.triptogether.tripaccount.service;

import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.RateLoadResponse;

public interface TripAccountLoadService {
	CurrenciesLoadResponse currenciesLoad();
	RateLoadResponse rateLoad(String currencyCode);
}
