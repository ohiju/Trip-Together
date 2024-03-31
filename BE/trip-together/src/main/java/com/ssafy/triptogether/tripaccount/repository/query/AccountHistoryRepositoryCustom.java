package com.ssafy.triptogether.tripaccount.repository.query;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ssafy.triptogether.tripaccount.domain.AccountHistory;

public interface AccountHistoryRepositoryCustom {
	Page<AccountHistory> findAccountHistoriesLoadDetailByMemberId(Long memberId, Pageable pageable);
}
