package com.ssafy.triptogether.plan.repository.query;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.plan.data.response.DailyPlanAttractionResponse;
import com.ssafy.triptogether.plan.data.response.DailyPlanListResponse;
import com.ssafy.triptogether.plan.data.response.DailyPlanResponse;
import com.ssafy.triptogether.plan.domain.Status;

import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static com.ssafy.triptogether.plan.domain.QPlan.plan;
import static com.ssafy.triptogether.plan.domain.QPlanAttraction.planAttraction;

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

    @Override
    public List<DailyPlanAttractionResponse> findAllDailyPlanByPlanId(long planId) {
        return queryFactory.select(Projections.constructor(DailyPlanAttractionResponse.class,
                        planAttraction.planAttractionId,
                        planAttraction.sequence,
                        new CaseBuilder()
                                .when(planAttraction.date.after(LocalDate.now())).then(false)
                                .otherwise(true)
                ))
                .from(planAttraction)
                .where(planAttraction.plan.id.eq(planId))
                .orderBy(planAttraction.date.asc(), planAttraction.sequence.asc())
                .fetch();
    }

    @Override
    public Optional<DailyPlanResponse> findDetailPlanById(long planId) {
        return Optional.ofNullable(
                queryFactory.select(Projections.constructor(DailyPlanResponse.class,
                                plan.region.cityName,
                                plan.startAt,
                                plan.endAt,
                                plan.title,
                                plan.estimatedBudget
                        ))
                        .from(plan)
                        .where(plan.id.eq(planId))
                        .fetchOne()
        );
    }

    @Override
    public List<DailyPlanListResponse> findPlansByMemberId(long memberId) {
        LocalDate currentDate = LocalDate.now();

        return queryFactory.select(Projections.constructor(DailyPlanListResponse.class,
                plan.id,
                plan.region.nation,
                plan.startAt,
                plan.endAt,
                plan.title,
                plan.estimatedBudget,
                plan.realBudget,
                new CaseBuilder()
                    .when(plan.endAt.before(currentDate))
                    .then(Status.BEFORE.getMessage())
                    .when(plan.startAt.after(currentDate))
                    .then(Status.AFTER.getMessage())
                    .otherwise(Status.IN_PROGRESS.getMessage())
            ))
            .from(plan)
            .where(plan.member.id.eq(memberId))
            .orderBy(plan.startAt.desc())
            .fetch();
    }
}
