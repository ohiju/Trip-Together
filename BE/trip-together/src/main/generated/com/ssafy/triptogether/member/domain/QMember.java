package com.ssafy.triptogether.member.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMember is a Querydsl query type for Member
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMember extends EntityPathBase<Member> {

    private static final long serialVersionUID = -705336392L;

    public static final QMember member = new QMember("member1");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    public final DatePath<java.time.LocalDate> birth = createDate("birth", java.time.LocalDate.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final StringPath description = createString("description");

    public final EnumPath<Gender> gender = createEnum("gender", Gender.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath imageUrl = createString("imageUrl");

    public final ListPath<MemberFlashMob, QMemberFlashMob> memberFlashMobs = this.<MemberFlashMob, QMemberFlashMob>createList("memberFlashMobs", MemberFlashMob.class, QMemberFlashMob.class, PathInits.DIRECT2);

    public final ListPath<MemberSettlement, QMemberSettlement> memberSettlements = this.<MemberSettlement, QMemberSettlement>createList("memberSettlements", MemberSettlement.class, QMemberSettlement.class, PathInits.DIRECT2);

    public final StringPath nickname = createString("nickname");

    public final StringPath pinNum = createString("pinNum");

    public final ListPath<com.ssafy.triptogether.plan.domain.Plan, com.ssafy.triptogether.plan.domain.QPlan> plans = this.<com.ssafy.triptogether.plan.domain.Plan, com.ssafy.triptogether.plan.domain.QPlan>createList("plans", com.ssafy.triptogether.plan.domain.Plan.class, com.ssafy.triptogether.plan.domain.QPlan.class, PathInits.DIRECT2);

    public final NumberPath<Double> rate = createNumber("rate", Double.class);

    public final ListPath<com.ssafy.triptogether.review.domain.Review, com.ssafy.triptogether.review.domain.QReview> reviews = this.<com.ssafy.triptogether.review.domain.Review, com.ssafy.triptogether.review.domain.QReview>createList("reviews", com.ssafy.triptogether.review.domain.Review.class, com.ssafy.triptogether.review.domain.QReview.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.triptogether.syncaccount.domain.SyncAccount, com.ssafy.triptogether.syncaccount.domain.QSyncAccount> syncAccounts = this.<com.ssafy.triptogether.syncaccount.domain.SyncAccount, com.ssafy.triptogether.syncaccount.domain.QSyncAccount>createList("syncAccounts", com.ssafy.triptogether.syncaccount.domain.SyncAccount.class, com.ssafy.triptogether.syncaccount.domain.QSyncAccount.class, PathInits.DIRECT2);

    public final ListPath<com.ssafy.triptogether.tripaccount.domain.TripAccount, com.ssafy.triptogether.tripaccount.domain.QTripAccount> tripAccounts = this.<com.ssafy.triptogether.tripaccount.domain.TripAccount, com.ssafy.triptogether.tripaccount.domain.QTripAccount>createList("tripAccounts", com.ssafy.triptogether.tripaccount.domain.TripAccount.class, com.ssafy.triptogether.tripaccount.domain.QTripAccount.class, PathInits.DIRECT2);

    public final StringPath uuid = createString("uuid");

    public QMember(String variable) {
        super(Member.class, forVariable(variable));
    }

    public QMember(Path<? extends Member> path) {
        super(path.getType(), path.getMetadata());
    }

    public QMember(PathMetadata metadata) {
        super(Member.class, metadata);
    }

}

