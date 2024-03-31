package com.ssafy.triptogether.flashmob.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.flashmob.domain.Settlement;

public interface SettlementRepository extends JpaRepository<Settlement, Long> {
	List<Settlement> findByFlashMobId(long flashmobId);
}
