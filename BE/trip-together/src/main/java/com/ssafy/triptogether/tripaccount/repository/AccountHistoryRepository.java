package com.ssafy.triptogether.tripaccount.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.tripaccount.domain.AccountHistory;
import com.ssafy.triptogether.tripaccount.repository.query.AccountHistoryRepositoryCustom;

public interface AccountHistoryRepository extends JpaRepository<AccountHistory, Long>, AccountHistoryRepositoryCustom {
}
