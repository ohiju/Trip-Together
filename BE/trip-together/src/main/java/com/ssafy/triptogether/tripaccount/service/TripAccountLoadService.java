package com.ssafy.triptogether.tripaccount.service;

import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.RateLoadResponse;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;

public interface TripAccountLoadService {
    CurrenciesLoadResponse currenciesLoad();

    RateLoadResponse rateLoad(CurrencyCode currencyCode);
}
