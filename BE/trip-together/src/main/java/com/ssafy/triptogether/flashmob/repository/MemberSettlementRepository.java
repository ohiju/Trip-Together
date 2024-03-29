package com.ssafy.triptogether.flashmob.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.ssafy.triptogether.flashmob.domain.MemberSettlement;

@NoRepositoryBean
public interface MemberSettlementRepository<T extends MemberSettlement> extends JpaRepository<T, Long> {
	List<MemberSettlement> findByMemberId(long memberId);
}
