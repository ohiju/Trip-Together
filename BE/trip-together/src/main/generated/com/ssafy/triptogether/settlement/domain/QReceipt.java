package com.ssafy.triptogether.settlement.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReceipt is a Querydsl query type for Receipt
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReceipt extends EntityPathBase<Receipt> {

    private static final long serialVersionUID = 1165433451L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReceipt receipt = new QReceipt("receipt");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    public final com.ssafy.triptogether.tripaccount.domain.QAccountHistory accountHistory;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QSettlement settlement;

    public QReceipt(String variable) {
        this(Receipt.class, forVariable(variable), INITS);
    }

    public QReceipt(Path<? extends Receipt> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReceipt(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReceipt(PathMetadata metadata, PathInits inits) {
        this(Receipt.class, metadata, inits);
    }

    public QReceipt(Class<? extends Receipt> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.accountHistory = inits.isInitialized("accountHistory") ? new com.ssafy.triptogether.tripaccount.domain.QAccountHistory(forProperty("accountHistory"), inits.get("accountHistory")) : null;
        this.settlement = inits.isInitialized("settlement") ? new QSettlement(forProperty("settlement"), inits.get("settlement")) : null;
    }

}

