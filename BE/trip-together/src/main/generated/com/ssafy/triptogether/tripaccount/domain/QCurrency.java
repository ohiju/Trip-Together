package com.ssafy.triptogether.tripaccount.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCurrency is a Querydsl query type for Currency
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCurrency extends EntityPathBase<Currency> {

    private static final long serialVersionUID = 1905082541L;

    public static final QCurrency currency = new QCurrency("currency");

    public final StringPath code = createString("code");

    public final StringPath flagImageUrl = createString("flagImageUrl");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath nation = createString("nation");

    public final ListPath<TripAccount, QTripAccount> tripAccounts = this.<TripAccount, QTripAccount>createList("tripAccounts", TripAccount.class, QTripAccount.class, PathInits.DIRECT2);

    public final StringPath unit = createString("unit");

    public QCurrency(String variable) {
        super(Currency.class, forVariable(variable));
    }

    public QCurrency(Path<? extends Currency> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCurrency(PathMetadata metadata) {
        super(Currency.class, metadata);
    }

}

