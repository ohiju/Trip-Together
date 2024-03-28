package com.ssafy.triptogether.member.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QMemberFlashMob is a Querydsl query type for MemberFlashMob
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QMemberFlashMob extends EntityPathBase<MemberFlashMob> {

    private static final long serialVersionUID = -1589079864L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QMemberFlashMob memberFlashMob = new QMemberFlashMob("memberFlashMob");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final com.ssafy.triptogether.flashmob.domain.QFlashMob flashMob;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final BooleanPath isMaster = createBoolean("isMaster");

    public final QMember member;

    public final EnumPath<RoomStatus> roomStatus = createEnum("roomStatus", RoomStatus.class);

    public QMemberFlashMob(String variable) {
        this(MemberFlashMob.class, forVariable(variable), INITS);
    }

    public QMemberFlashMob(Path<? extends MemberFlashMob> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QMemberFlashMob(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QMemberFlashMob(PathMetadata metadata, PathInits inits) {
        this(MemberFlashMob.class, metadata, inits);
    }

    public QMemberFlashMob(Class<? extends MemberFlashMob> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.flashMob = inits.isInitialized("flashMob") ? new com.ssafy.triptogether.flashmob.domain.QFlashMob(forProperty("flashMob"), inits.get("flashMob")) : null;
        this.member = inits.isInitialized("member") ? new QMember(forProperty("member")) : null;
    }

}

