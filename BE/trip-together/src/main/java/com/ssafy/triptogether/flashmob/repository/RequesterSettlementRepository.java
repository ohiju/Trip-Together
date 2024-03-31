package com.ssafy.triptogether.flashmob.repository;

import java.util.List;

import com.ssafy.triptogether.flashmob.domain.MemberSettlement;
import com.ssafy.triptogether.flashmob.domain.RequesterSettlement;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RequesterSettlementRepository extends MemberSettlementRepository<RequesterSettlement> {

}
