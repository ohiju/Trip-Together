package com.ssafy.triptogether.flashmob.repository;

import com.ssafy.triptogether.flashmob.domain.ParticipantSettlement;
import com.ssafy.triptogether.flashmob.repository.query.MemberSettlementRepositoryCustom;

public interface ParticipantSettlementRepository extends MemberSettlementRepository<ParticipantSettlement>,
	MemberSettlementRepositoryCustom {

}
