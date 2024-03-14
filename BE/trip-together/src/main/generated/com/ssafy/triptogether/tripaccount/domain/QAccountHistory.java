package com.ssafy.triptogether.tripaccount.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAccountHistory is a Querydsl query type for AccountHistory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAccountHistory extends EntityPathBase<AccountHistory> {

    private static final long serialVersionUID = -1420033725L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAccountHistory accountHistory = new QAccountHistory("accountHistory");

    public final StringPath address = createString("address");

    public final StringPath businessName = createString("businessName");

    public final StringPath businessNum = createString("businessNum");

    public final StringPath currency = createString("currency");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Double> quantity = createNumber("quantity", Double.class);

    public final QTripAccount tripAccount;

    public final EnumPath<Type> type = createEnum("type", Type.class);

    public QAccountHistory(String variable) {
        this(AccountHistory.class, forVariable(variable), INITS);
    }

    public QAccountHistory(Path<? extends AccountHistory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAccountHistory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAccountHistory(PathMetadata metadata, PathInits inits) {
        this(AccountHistory.class, metadata, inits);
    }

    public QAccountHistory(Class<? extends AccountHistory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.tripAccount = inits.isInitialized("tripAccount") ? new QTripAccount(forProperty("tripAccount"), inits.get("tripAccount")) : null;
    }

}

