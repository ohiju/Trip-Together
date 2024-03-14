package com.ssafy.triptogether.syncaccount.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSyncAccount is a Querydsl query type for SyncAccount
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSyncAccount extends EntityPathBase<SyncAccount> {

    private static final long serialVersionUID = 1161325548L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSyncAccount syncAccount = new QSyncAccount("syncAccount");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final BooleanPath isMain = createBoolean("isMain");

    public final com.ssafy.triptogether.member.domain.QMember member;

    public final StringPath name = createString("name");

    public final StringPath num = createString("num");

    public final StringPath uuid = createString("uuid");

    public QSyncAccount(String variable) {
        this(SyncAccount.class, forVariable(variable), INITS);
    }

    public QSyncAccount(Path<? extends SyncAccount> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSyncAccount(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSyncAccount(PathMetadata metadata, PathInits inits) {
        this(SyncAccount.class, metadata, inits);
    }

    public QSyncAccount(Class<? extends SyncAccount> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.member = inits.isInitialized("member") ? new com.ssafy.triptogether.member.domain.QMember(forProperty("member")) : null;
    }

}

