package com.ssafy.triptogether.member.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMemberSettlement is a Querydsl query type for MemberSettlement
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMemberSettlement extends EntityPathBase<MemberSettlement> {

    private static final long serialVersionUID = -1106998527L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMemberSettlement memberSettlement = new QMemberSettlement("memberSettlement");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final BooleanPath hasSent = createBoolean("hasSent");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final BooleanPath isRequester = createBoolean("isRequester");

    public final QMember member;

    public final NumberPath<Double> price = createNumber("price", Double.class);

    public final com.ssafy.triptogether.settlement.domain.QSettlement settlement;

    public QMemberSettlement(String variable) {
        this(MemberSettlement.class, forVariable(variable), INITS);
    }

    public QMemberSettlement(Path<? extends MemberSettlement> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMemberSettlement(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMemberSettlement(PathMetadata metadata, PathInits inits) {
        this(MemberSettlement.class, metadata, inits);
    }

    public QMemberSettlement(Class<? extends MemberSettlement> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.member = inits.isInitialized("member") ? new QMember(forProperty("member")) : null;
        this.settlement = inits.isInitialized("settlement") ? new com.ssafy.triptogether.settlement.domain.QSettlement(forProperty("settlement"), inits.get("settlement")) : null;
    }

}

