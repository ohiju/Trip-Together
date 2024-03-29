package com.ssafy.triptogether.flashmob.repository;

import java.util.Optional;

import com.ssafy.triptogether.flashmob.domain.MemberSettlement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberSettlementRepository extends JpaRepository<MemberSettlement, Long> {
	Optional<MemberSettlement> findByMemberIdAndSettlementId(long memberId, long settlementId);
}
