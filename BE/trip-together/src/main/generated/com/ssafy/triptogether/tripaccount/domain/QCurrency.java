package com.ssafy.triptogether.tripaccount.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCurrency is a Querydsl query type for Currency
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCurrency extends EntityPathBase<Currency> {

    private static final long serialVersionUID = 1905082541L;

    public static final QCurrency currency = new QCurrency("currency");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    public final EnumPath<CurrencyCode> code = createEnum("code", CurrencyCode.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final EnumPath<CurrencyNation> currencyNation = createEnum("currencyNation", CurrencyNation.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Double> rate = createNumber("rate", Double.class);

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

