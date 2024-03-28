package com.ssafy.triptogether.tripaccount.repository;

import com.ssafy.triptogether.tripaccount.domain.AccountHistory;
import com.ssafy.triptogether.tripaccount.repository.query.AccountHistoryRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountHistoryRepository extends JpaRepository<AccountHistory, Long>, AccountHistoryRepositoryCustom {
}
