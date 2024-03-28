package com.ssafy.triptogether.member.repository.query;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.member.domain.MemberFlashMob;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

import static com.ssafy.triptogether.flashmob.domain.QFlashMob.flashMob;
import static com.ssafy.triptogether.member.domain.QMember.member;
import static com.ssafy.triptogether.member.domain.QMemberFlashMob.memberFlashMob;

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
}
