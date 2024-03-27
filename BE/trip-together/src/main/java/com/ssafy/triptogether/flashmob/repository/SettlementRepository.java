package com.ssafy.triptogether.flashmob.repository;

import com.ssafy.triptogether.flashmob.domain.document.Settlement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementRepository extends JpaRepository<Settlement, Long> {
}
