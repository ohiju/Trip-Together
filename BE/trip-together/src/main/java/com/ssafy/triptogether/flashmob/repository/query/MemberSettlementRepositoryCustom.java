package com.ssafy.triptogether.flashmob.repository.query;

import java.util.List;
import java.util.Optional;

import com.ssafy.triptogether.flashmob.data.response.AttendeesStatusDetail;
import com.ssafy.triptogether.flashmob.domain.ParticipantSettlement;

public interface MemberSettlementRepositoryCustom {
	Optional<ParticipantSettlement> findByMemberIdAndSettlementId(long memberId, long settlementId);
	List<AttendeesStatusDetail> checkParticipantsStatus(long memberId, long settlementId);
}
