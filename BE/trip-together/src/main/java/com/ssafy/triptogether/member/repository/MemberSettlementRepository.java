package com.ssafy.triptogether.member.repository;

import com.ssafy.triptogether.member.domain.MemberSettlement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberSettlementRepository extends JpaRepository<MemberSettlement, Long> {
}
