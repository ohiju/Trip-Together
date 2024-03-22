package com.ssafy.triptogether.plan.repository.query;

import static com.ssafy.triptogether.plan.domain.QPlan.*;

import java.time.LocalDate;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.member.domain.Member;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class PlanRepositoryCustomImpl implements PlanRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public boolean existOverlappingPlan(Member member, LocalDate startAt, LocalDate endAt) {
		return queryFactory
			.selectOne()
			.from(plan)
			.where(plan.member.eq(member)
				.and(plan.startAt.after(endAt)
					.or(plan.endAt.before(startAt))
					.not()
				)
			)
			.fetchFirst() != null;
	}
}
