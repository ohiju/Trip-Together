package com.ssafy.triptogether.flashmob.repository.query;

import java.util.List;
import java.util.Optional;

import com.ssafy.triptogether.flashmob.data.response.AttendeesStatusDetail;
import com.ssafy.triptogether.flashmob.domain.ParticipantSettlement;
import com.ssafy.triptogether.flashmob.domain.RequesterSettlement;
import com.ssafy.triptogether.member.domain.Member;

public interface MemberSettlementRepositoryCustom {
	ParticipantSettlement participantFindByMemberIdAndSettlementId(long memberId, long settlementId);
	Member requesterFindBySettlementId(long settlementId);
	List<AttendeesStatusDetail> checkParticipantsStatus(long memberId, long settlementId);
	boolean checkSettlementIsDone(long settlementId);
}
