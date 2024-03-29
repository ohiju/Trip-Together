package com.ssafy.triptogether.flashmob.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSettlement is a Querydsl query type for Settlement
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSettlement extends EntityPathBase<Settlement> {

    private static final long serialVersionUID = -337672643L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSettlement settlement = new QSettlement("settlement");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    public final NumberPath<Integer> attendanceCount = createNumber("attendanceCount", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final EnumPath<com.ssafy.triptogether.tripaccount.domain.CurrencyCode> currencyCode = createEnum("currencyCode", com.ssafy.triptogether.tripaccount.domain.CurrencyCode.class);

    public final QFlashMob flashMob;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final ListPath<com.ssafy.triptogether.member.domain.MemberSettlement, com.ssafy.triptogether.member.domain.QMemberSettlement> memberSettlements = this.<com.ssafy.triptogether.member.domain.MemberSettlement, com.ssafy.triptogether.member.domain.QMemberSettlement>createList("memberSettlements", com.ssafy.triptogether.member.domain.MemberSettlement.class, com.ssafy.triptogether.member.domain.QMemberSettlement.class, PathInits.DIRECT2);

    public final NumberPath<Double> totalPrice = createNumber("totalPrice", Double.class);

    public QSettlement(String variable) {
        this(Settlement.class, forVariable(variable), INITS);
    }

    public QSettlement(Path<? extends Settlement> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSettlement(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSettlement(PathMetadata metadata, PathInits inits) {
        this(Settlement.class, metadata, inits);
    }

    public QSettlement(Class<? extends Settlement> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.flashMob = inits.isInitialized("flashMob") ? new QFlashMob(forProperty("flashMob"), inits.get("flashMob")) : null;
    }

}

