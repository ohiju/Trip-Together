package com.ssafy.triptogether.syncaccount.repository;

import java.util.List;
import java.util.Optional;

import com.ssafy.triptogether.syncaccount.domain.SyncAccount;
import com.ssafy.triptogether.syncaccount.repository.query.SyncAccountRepositoryCustom;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SyncAccountRepository extends JpaRepository<SyncAccount, Long>, SyncAccountRepositoryCustom {
	Optional<SyncAccount> findByMemberIdAndIsMain(long memberId, boolean isMain);
	Optional<SyncAccount> findByUuid(String uuid);
}
