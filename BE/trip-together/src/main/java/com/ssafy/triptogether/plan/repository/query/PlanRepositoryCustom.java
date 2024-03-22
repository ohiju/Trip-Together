package com.ssafy.triptogether.plan.repository.query;

import java.time.LocalDate;

import com.ssafy.triptogether.member.domain.Member;

public interface PlanRepositoryCustom {
	boolean existOverlappingPlan(Member member, LocalDate startAt, LocalDate endAt);
}
