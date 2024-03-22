package com.ssafy.triptogether.tripaccount.repository;

import java.util.Optional;

import com.ssafy.triptogether.tripaccount.domain.Currency;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<Currency, Long> {
	Optional<Currency> findByCode(CurrencyCode code);
}
