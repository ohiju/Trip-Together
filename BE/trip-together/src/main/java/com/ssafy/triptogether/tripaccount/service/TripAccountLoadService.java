package com.ssafy.triptogether.tripaccount.service;

import com.ssafy.triptogether.tripaccount.data.response.AccountHistoriesLoadDetail;
import com.ssafy.triptogether.tripaccount.data.response.CurrenciesLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.RateLoadResponse;
import com.ssafy.triptogether.tripaccount.data.response.TripAccountsLoadResponse;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TripAccountLoadService {
    CurrenciesLoadResponse currenciesLoad();

    RateLoadResponse rateLoad(CurrencyCode currencyCode);

    TripAccountsLoadResponse tripAccountsLoad(long memberId);

    Page<AccountHistoriesLoadDetail> accountHistoriesLoad(long memberId, Pageable pageable);
}
