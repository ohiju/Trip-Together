package com.ssafy.triptogether.syncaccount.repository;

import com.ssafy.triptogether.syncaccount.domain.SyncAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SyncAccountRepository extends JpaRepository<SyncAccount, Long> {
}
