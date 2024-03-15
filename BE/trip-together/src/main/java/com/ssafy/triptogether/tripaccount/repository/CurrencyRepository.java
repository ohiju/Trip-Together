package com.ssafy.triptogether.tripaccount.repository;

import com.ssafy.triptogether.tripaccount.domain.Currency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<Currency, Long> {
}
