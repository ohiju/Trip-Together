package com.ssafy.triptogether.member.repository.query;

import static com.ssafy.triptogether.flashmob.domain.QFlashMob.*;
import static com.ssafy.triptogether.flashmob.domain.QMemberFlashMob.*;
import static com.ssafy.triptogether.member.domain.QMember.*;

import java.util.List;
import java.util.Optional;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.flashmob.domain.MemberFlashMob;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class MemberFlashmobRepositoryCustomImpl implements MemberFlashmobRepositoryCustom {

	private final JPAQueryFactory queryFactory;

	@Override
	public Optional<MemberFlashMob> findMemberFlashmobByFlashmobIdAndMemberId(long flashmobId, long memberId) {
		return Optional.ofNullable(
			queryFactory.select(memberFlashMob)
				.from(memberFlashMob)
				.innerJoin(flashMob).on(flashMob.id.eq(memberFlashMob.flashMob.id))
				.innerJoin(member).on(member.id.eq(memberFlashMob.member.id))
				.where(memberFlashMob.flashMob.id.eq(flashmobId), memberFlashMob.member.id.eq(memberId))
				.fetchOne()
		);
	}

	@Override
	public boolean isMaster(long flashmobId, long memberId) {
		Integer fetchOne = queryFactory
			.selectOne()
			.from(memberFlashMob)
			.where(memberFlashMob.flashMob.id.eq(flashmobId)
				.and(memberFlashMob.member.id.eq(memberId))
				.and(memberFlashMob.isMaster.eq(true)))
			.fetchFirst();
		return fetchOne != null;
	}

	@Override
	public Optional<MemberFlashMob> findMemberFlashmobByFlashmobIdNotInMemberId(long flashmobId, long memberId) {
		return Optional.ofNullable(
			queryFactory.select(memberFlashMob)
				.from(memberFlashMob)
				.where(memberFlashMob.flashMob.id.eq(flashmobId)
					.and(memberFlashMob.member.id.notIn(List.of(memberId))))
				.fetchFirst()
		);
	}
}
