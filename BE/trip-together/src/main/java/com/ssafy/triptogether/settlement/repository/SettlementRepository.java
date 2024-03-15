package com.ssafy.triptogether.settlement.repository;

import com.ssafy.triptogether.settlement.domain.Settlement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementRepository extends JpaRepository<Settlement, Long> {
}
