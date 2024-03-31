package com.ssafy.triptogether.flashmob.repository;

import java.util.List;
import java.util.Optional;

import com.ssafy.triptogether.flashmob.domain.Settlement;
import com.ssafy.triptogether.flashmob.repository.query.SettlementRepositoryCustom;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SettlementRepository extends JpaRepository<Settlement, Long>, SettlementRepositoryCustom {
	List<Settlement> findByFlashMobId(long flashmobId);
}
