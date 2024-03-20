package com.ssafy.twinklebank.account.repository;

import com.ssafy.twinklebank.account.domain.Account;
import com.ssafy.twinklebank.account.repository.query.AccountRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Long>, AccountRepositoryCustom {
    void addLinkedAccount(long userId, String accountUUUID);

    Optional<Account> findAccountByUuid(String uuid);
}
