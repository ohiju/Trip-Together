package com.ssafy.triptogether.syncaccount.repository;

import java.util.List;
import java.util.Optional;

import com.ssafy.triptogether.syncaccount.domain.SyncAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SyncAccountRepository extends JpaRepository<SyncAccount, Long> {
	List<SyncAccount> findByMemberId(Long memberId);
}
