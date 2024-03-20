package com.ssafy.twinklebank.account.repository;

import com.ssafy.twinklebank.account.domain.WithdrawalAgreement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WithdrawalAgreementRepository extends JpaRepository<WithdrawalAgreement, Long> {
}
