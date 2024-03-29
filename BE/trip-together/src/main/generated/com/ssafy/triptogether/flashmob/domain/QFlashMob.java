package com.ssafy.triptogether.flashmob.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QFlashMob is a Querydsl query type for FlashMob
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QFlashMob extends EntityPathBase<FlashMob> {

    private static final long serialVersionUID = -756995324L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QFlashMob flashMob = new QFlashMob("flashMob");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    public final com.ssafy.triptogether.attraction.domain.QAttraction attraction;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Integer> maxMemberCount = createNumber("maxMemberCount", Integer.class);

    public final ListPath<com.ssafy.triptogether.member.domain.MemberFlashMob, com.ssafy.triptogether.member.domain.QMemberFlashMob> memberFlashMobs = this.<com.ssafy.triptogether.member.domain.MemberFlashMob, com.ssafy.triptogether.member.domain.QMemberFlashMob>createList("memberFlashMobs", com.ssafy.triptogether.member.domain.MemberFlashMob.class, com.ssafy.triptogether.member.domain.QMemberFlashMob.class, PathInits.DIRECT2);

    public final ListPath<Settlement, QSettlement> settlements = this.<Settlement, QSettlement>createList("settlements", Settlement.class, QSettlement.class, PathInits.DIRECT2);

    public final DateTimePath<java.time.LocalDateTime> startAt = createDateTime("startAt", java.time.LocalDateTime.class);

    public final StringPath title = createString("title");

    public QFlashMob(String variable) {
        this(FlashMob.class, forVariable(variable), INITS);
    }

    public QFlashMob(Path<? extends FlashMob> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QFlashMob(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QFlashMob(PathMetadata metadata, PathInits inits) {
        this(FlashMob.class, metadata, inits);
    }

    public QFlashMob(Class<? extends FlashMob> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.attraction = inits.isInitialized("attraction") ? new com.ssafy.triptogether.attraction.domain.QAttraction(forProperty("attraction"), inits.get("attraction")) : null;
    }

}

