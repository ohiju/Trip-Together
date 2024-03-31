package com.ssafy.triptogether.flashmob.repository.query;

import java.util.List;
import java.util.Optional;

import com.ssafy.triptogether.flashmob.data.response.ParticipantSettlementsLoadDetail;
import com.ssafy.triptogether.flashmob.data.response.RequesterSettlementsLoadDetail;
import com.ssafy.triptogether.flashmob.domain.ParticipantSettlement;

public interface SettlementRepositoryCustom {
	List<RequesterSettlementsLoadDetail> findByRequester(long memberId);
	List<ParticipantSettlementsLoadDetail> findByParticipant(long memberId);
}
