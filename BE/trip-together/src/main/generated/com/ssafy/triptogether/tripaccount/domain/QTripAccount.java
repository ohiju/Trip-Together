package com.ssafy.triptogether.tripaccount.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTripAccount is a Querydsl query type for TripAccount
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTripAccount extends EntityPathBase<TripAccount> {

    private static final long serialVersionUID = -1581628372L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTripAccount tripAccount = new QTripAccount("tripAccount");

    public final ListPath<AccountHistory, QAccountHistory> accountHistories = this.<AccountHistory, QAccountHistory>createList("accountHistories", AccountHistory.class, QAccountHistory.class, PathInits.DIRECT2);

    public final NumberPath<Double> balance = createNumber("balance", Double.class);

    public final QCurrency currency;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final com.ssafy.triptogether.member.domain.QMember member;

    public QTripAccount(String variable) {
        this(TripAccount.class, forVariable(variable), INITS);
    }

    public QTripAccount(Path<? extends TripAccount> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTripAccount(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTripAccount(PathMetadata metadata, PathInits inits) {
        this(TripAccount.class, metadata, inits);
    }

    public QTripAccount(Class<? extends TripAccount> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.currency = inits.isInitialized("currency") ? new QCurrency(forProperty("currency")) : null;
        this.member = inits.isInitialized("member") ? new com.ssafy.triptogether.member.domain.QMember(forProperty("member")) : null;
    }

}

