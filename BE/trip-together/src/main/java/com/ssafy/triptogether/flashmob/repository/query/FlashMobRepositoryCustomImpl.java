package com.ssafy.triptogether.flashmob.repository.query;

import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.attraction.data.FlashmobElementFindResponse;
import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobFindResponse;
import com.ssafy.triptogether.member.domain.RoomStatus;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.querydsl.core.types.ExpressionUtils.count;
import static com.ssafy.triptogether.attraction.domain.QAttraction.attraction;
import static com.ssafy.triptogether.flashmob.domain.QFlashMob.flashMob;
import static com.ssafy.triptogether.member.domain.QMember.member;
import static com.ssafy.triptogether.member.domain.QMemberFlashMob.memberFlashMob;

@RequiredArgsConstructor
public class FlashMobRepositoryCustomImpl implements FlashMobRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<FlashmobElementFindResponse> findAllFlashmobElementsByAttractionId(long attractionId, long memberId) {
        return queryFactory.select(Projections.constructor(FlashmobElementFindResponse.class,
                flashMob.id,
                ExpressionUtils.as(
                    JPAExpressions.select(member.id)
                        .from(member)
                        .innerJoin(memberFlashMob).on(memberFlashMob.member.id.eq(member.id))
                        .where(memberFlashMob.flashMob.id.eq(flashMob.id), memberFlashMob.isMaster.eq(true)),
                    "masterId"
                ),
                ExpressionUtils.as(
                    JPAExpressions.select(member.imageUrl)
                        .from(member)
                        .innerJoin(memberFlashMob).on(memberFlashMob.member.id.eq(member.id))
                        .where(memberFlashMob.flashMob.id.eq(flashMob.id), memberFlashMob.isMaster.eq(true)),
                    "masterImageUrl"
                ),
                flashMob.title,
                flashMob.startAt,
                flashMob.maxMemberCount,
                ExpressionUtils.as(
                    JPAExpressions.select(count(memberFlashMob.id))
                        .from(memberFlashMob)
                        .where(memberFlashMob.flashMob.id.eq(flashMob.id), memberFlashMob.roomStatus.eq(RoomStatus.ATTEND)),
                    "flashmobCurrentCount"
                ),
                attraction.name,
                ExpressionUtils.as(
                    JPAExpressions.select(
                            new CaseBuilder()
                                .when(memberFlashMob.roomStatus.in(RoomStatus.ATTEND, RoomStatus.WAIT)).then(memberFlashMob.roomStatus)
                                .otherwise((RoomStatus) null)
                        )
                        .from(memberFlashMob)
                        .where(memberFlashMob.flashMob.id.eq(flashMob.id), memberFlashMob.member.id.eq(memberId)),
                    "status"
                )
            ))
            .from(flashMob)
            .innerJoin(attraction).on(attraction.id.eq(flashMob.attraction.id))
            .where(attraction.id.eq(attractionId))
            .fetch();
    }

    @Override
    public List<AttendingFlashmobFindResponse> findAllAttendingFlashmobElementsByMemberId(long memberId) {
        return queryFactory.select(Projections.constructor(AttendingFlashmobFindResponse.class,
                flashMob.id,
                ExpressionUtils.as(
                    JPAExpressions.select(member.id)
                        .from(member)
                        .innerJoin(memberFlashMob).on(memberFlashMob.member.id.eq(member.id))
                        .where(memberFlashMob.flashMob.id.eq(flashMob.id), memberFlashMob.isMaster.eq(true)),
                    "masterId"
                ),
                ExpressionUtils.as(
                    JPAExpressions.select(member.imageUrl)
                        .from(member)
                        .innerJoin(memberFlashMob).on(memberFlashMob.member.id.eq(member.id))
                        .where(memberFlashMob.flashMob.id.eq(flashMob.id), memberFlashMob.isMaster.eq(true)),
                    "masterImageUrl"
                ),
                flashMob.title,
                flashMob.startAt,
                flashMob.maxMemberCount,
                ExpressionUtils.as(
                    JPAExpressions.select(count(memberFlashMob.id))
                        .from(memberFlashMob)
                        .where(memberFlashMob.flashMob.id.eq(flashMob.id), memberFlashMob.roomStatus.eq(RoomStatus.ATTEND)),
                    "currentCount"
                ),
                memberFlashMob.id,
                attraction.name,
                memberFlashMob.roomStatus
            ))
            .from(flashMob)
            .innerJoin(memberFlashMob).on(memberFlashMob.flashMob.id.eq(flashMob.id))
            .innerJoin(member).on(member.id.eq(memberFlashMob.member.id))
            .innerJoin(attraction).on(attraction.id.eq(flashMob.attraction.id))
            .where(member.id.eq(memberId), memberFlashMob.roomStatus.in(RoomStatus.WAIT, RoomStatus.ATTEND, RoomStatus.REFUSE_UNCHECK))
            .fetch();
    }
}
