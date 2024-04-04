package com.ssafy.triptogether.flashmob.repository.query;

import static com.ssafy.triptogether.flashmob.domain.QParticipantSettlement.*;
import static com.ssafy.triptogether.flashmob.domain.QRequesterSettlement.*;
import static com.ssafy.triptogether.flashmob.domain.QSettlement.*;
import static com.ssafy.triptogether.global.exception.response.ErrorCode.*;
import static com.ssafy.triptogether.member.domain.QMember.*;

import java.util.List;
import java.util.Optional;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.flashmob.data.response.AttendeesStatusDetail;
import com.ssafy.triptogether.flashmob.domain.ParticipantSettlement;
import com.ssafy.triptogether.flashmob.domain.QRequesterSettlement;
import com.ssafy.triptogether.flashmob.domain.QSettlement;
import com.ssafy.triptogether.flashmob.domain.RequesterSettlement;
import com.ssafy.triptogether.flashmob.domain.Settlement;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.domain.QMember;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class MemberSettlementRepositoryCustomImpl implements MemberSettlementRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public ParticipantSettlement participantFindByMemberIdAndSettlementId(long memberId, long settlementId) {
		return Optional.ofNullable(queryFactory.selectFrom(participantSettlement)
				.where(participantSettlement.settlement.id.eq(settlementId)
					.and(participantSettlement.member.id.eq(memberId)))
				.fetchOne())
			.orElseThrow(
				() -> new NotFoundException("ParticipantSettlementLoad", SETTLEMENT_MEMBER_NOT_FOUND)
			);
	}

	@Override
	public Settlement settlementFindByRequesterIdAndSettlementId(long memberId, long settlementId) {
		return Optional.ofNullable(queryFactory.select(settlement)
				.from(requesterSettlement)
				.where(requesterSettlement.settlement.id.eq(settlementId)
					.and(requesterSettlement.member.id.eq(memberId)))
				.fetchOne())
			.orElseThrow(
				() -> new NotFoundException("RequesterSettlementLoad", SETTLEMENT_MEMBER_NOT_FOUND)
			);
	}

	@Override
	public Member requesterFindBySettlementId(long settlementId) {
		return queryFactory.select(member)
			.from(requesterSettlement)
			.where(requesterSettlement.settlement.id.eq(settlementId))
			.join(requesterSettlement.member, member)
			.fetchOne();
	}

	@Override
	public List<AttendeesStatusDetail> checkParticipantsStatus(long memberId, long settlementId) {
		Settlement settlement = Optional.ofNullable(queryFactory.select(requesterSettlement.settlement)
				.from(requesterSettlement)
				.where(requesterSettlement.member.id.eq(memberId)
					.and(requesterSettlement.settlement.id.eq(settlementId)))
				.fetchOne())
			.orElseThrow(
				() -> new NotFoundException("CheckParticipantsStatus", ErrorCode.SETTLEMENT_NOT_FOUND)
			);
		return queryFactory.select(Projections.constructor(AttendeesStatusDetail.class,
				participantSettlement.member.id,
				participantSettlement.member.nickname,
				participantSettlement.member.imageUrl,
				participantSettlement.price,
				participantSettlement.hasSent))
			.from(participantSettlement)
			.where(participantSettlement.settlement.id.eq(settlement.getId()))
			.join(participantSettlement.member, member)
			.fetch();
	}

	@Override
	public boolean checkSettlementIsDone(long settlementId) {
		BooleanExpression exists = queryFactory
			.select(participantSettlement.count())
			.from(participantSettlement)
			.where(participantSettlement.settlement.id.eq(settlementId)
				.and(participantSettlement.hasSent.eq(false)))
			.exists();
		return Boolean.FALSE.equals(queryFactory.select(exists)
			.fetchOne());
	}
}
