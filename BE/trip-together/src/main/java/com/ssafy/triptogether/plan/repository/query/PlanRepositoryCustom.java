package com.ssafy.triptogether.plan.repository.query;

import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.plan.data.response.DailyPlanListResponse;
import com.ssafy.triptogether.plan.data.response.DailyPlanResponse;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface PlanRepositoryCustom {
    boolean existOverlappingPlan(Member member, LocalDate startAt, LocalDate endAt);

    boolean existOverlappingPlanModify(long planId, Member member, LocalDate startAt, LocalDate endAt);

    Optional<DailyPlanResponse> findDetailPlanById(long planId);

    List<DailyPlanListResponse> findPlansByMemberId(long memberId);
}
