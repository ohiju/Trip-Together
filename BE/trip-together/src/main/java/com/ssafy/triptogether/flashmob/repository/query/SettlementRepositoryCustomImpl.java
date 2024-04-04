package com.ssafy.triptogether.flashmob.repository.query;


import static com.ssafy.triptogether.flashmob.domain.QMemberSettlement.*;
import static com.ssafy.triptogether.flashmob.domain.QParticipantSettlement.*;
import static com.ssafy.triptogether.flashmob.domain.QRequesterSettlement.*;
import static com.ssafy.triptogether.flashmob.domain.QSettlement.*;
import static com.ssafy.triptogether.member.domain.QMember.*;

import java.util.List;
import java.util.Optional;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.flashmob.data.response.ParticipantSettlementsLoadDetail;
import com.ssafy.triptogether.flashmob.data.response.RequesterSettlementsLoadDetail;
import com.ssafy.triptogether.flashmob.domain.MemberSettlement;
import com.ssafy.triptogether.flashmob.domain.ParticipantSettlement;
import com.ssafy.triptogether.flashmob.domain.QParticipantSettlement;
import com.ssafy.triptogether.flashmob.domain.QRequesterSettlement;
import com.ssafy.triptogether.flashmob.domain.RequesterSettlement;
import com.ssafy.triptogether.flashmob.domain.Settlement;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SettlementRepositoryCustomImpl implements SettlementRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public List<RequesterSettlementsLoadDetail> findByRequester(long memberId) {
		return queryFactory.select(Projections.constructor(RequesterSettlementsLoadDetail.class,
				settlement.id,
				settlement.totalPrice,
				settlement.currencyCode,
				settlement.isDone,
				member.id,
				member.nickname,
				member.imageUrl))
			.from(settlement)
			.join(settlement.memberSettlements, memberSettlement)
			.join(memberSettlement.member, member)
			.where(memberSettlement.member.id.eq(memberId)
				.and(memberSettlement.instanceOf(RequesterSettlement.class)))
			.fetch();
	}

	@Override
	public List<ParticipantSettlementsLoadDetail> findByParticipant(long memberId) {
		List<Settlement> settlements = queryFactory.select(settlement)
			.from(settlement)
			.join(settlement.memberSettlements, memberSettlement)
			.where(memberSettlement.member.id.eq(memberId)
				.and(memberSettlement.instanceOf(ParticipantSettlement.class)))
			.fetch();
		return settlements.stream().map(settlementCheck -> {
			RequesterSettlement foundRequesterSettlement = queryFactory
				.selectFrom(requesterSettlement)
				.where(requesterSettlement.settlement.id.eq(settlementCheck.getId()))
				.join(requesterSettlement.member, member).fetchJoin()
				.fetchOne();

			return ParticipantSettlementsLoadDetail.builder()
				.settlementId(settlementCheck.getId())
				.totalPrice(settlementCheck.getTotalPrice())
				.currencyCode(settlementCheck.getCurrencyCode())
				.isDone(settlementCheck.getIsDone())
				.receiverId(foundRequesterSettlement.getMember().getId())
				.receiverNickname(foundRequesterSettlement.getMember().getNickname())
				.receiverImageUrl(foundRequesterSettlement.getMember().getImageUrl())
				.build();
		}).toList();
	}
}
