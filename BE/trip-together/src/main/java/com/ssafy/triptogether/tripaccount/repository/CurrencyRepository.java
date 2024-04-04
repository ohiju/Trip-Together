package com.ssafy.triptogether.tripaccount.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.tripaccount.domain.Currency;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;

public interface CurrencyRepository extends JpaRepository<Currency, Long> {
	Optional<Currency> findByCode(CurrencyCode code);
}
