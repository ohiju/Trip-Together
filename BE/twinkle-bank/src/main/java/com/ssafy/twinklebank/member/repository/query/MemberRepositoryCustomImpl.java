package com.ssafy.twinklebank.member.repository.query;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.twinklebank.member.data.AuthInfoFindResponse;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

import static com.ssafy.twinklebank.member.domain.QMember.member;

@RequiredArgsConstructor
public class MemberRepositoryCustomImpl implements MemberRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Optional<AuthInfoFindResponse> findAuthInfoById(String memberUuid) {
        return Optional.ofNullable(
                queryFactory.select(Projections.constructor(AuthInfoFindResponse.class,
                                member.uuid,
                                member.name,
                                member.gender,
                                member.birth
                        ))
                        .from(member)
                        .where(member.uuid.eq(memberUuid))
                        .fetchOne()
        );
    }
}
