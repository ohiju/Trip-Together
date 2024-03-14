package com.ssafy.triptogether.attraction.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QRegion is a Querydsl query type for Region
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QRegion extends EntityPathBase<Region> {

    private static final long serialVersionUID = -1237893601L;

    public static final QRegion region = new QRegion("region");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    public final ListPath<Attraction, QAttraction> attractions = this.<Attraction, QAttraction>createList("attractions", Attraction.class, QAttraction.class, PathInits.DIRECT2);

    public final StringPath cityName = createString("cityName");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final StringPath flagImageUrl = createString("flagImageUrl");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath latitude = createString("latitude");

    public final StringPath longitude = createString("longitude");

    public final EnumPath<Nation> nation = createEnum("nation", Nation.class);

    public final ListPath<com.ssafy.triptogether.plan.domain.Plan, com.ssafy.triptogether.plan.domain.QPlan> plans = this.<com.ssafy.triptogether.plan.domain.Plan, com.ssafy.triptogether.plan.domain.QPlan>createList("plans", com.ssafy.triptogether.plan.domain.Plan.class, com.ssafy.triptogether.plan.domain.QPlan.class, PathInits.DIRECT2);

    public QRegion(String variable) {
        super(Region.class, forVariable(variable));
    }

    public QRegion(Path<? extends Region> path) {
        super(path.getType(), path.getMetadata());
    }

    public QRegion(PathMetadata metadata) {
        super(Region.class, metadata);
    }

}

