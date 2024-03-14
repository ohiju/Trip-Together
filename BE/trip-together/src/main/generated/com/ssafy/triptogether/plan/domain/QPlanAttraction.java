package com.ssafy.triptogether.plan.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPlanAttraction is a Querydsl query type for PlanAttraction
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPlanAttraction extends EntityPathBase<PlanAttraction> {

    private static final long serialVersionUID = -620871715L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPlanAttraction planAttraction = new QPlanAttraction("planAttraction");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    public final com.ssafy.triptogether.attraction.domain.QAttraction attraction;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final QPlan plan;

    public final NumberPath<Long> planAttractionId = createNumber("planAttractionId", Long.class);

    public final NumberPath<Integer> sequence = createNumber("sequence", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> tripAt = createDateTime("tripAt", java.time.LocalDateTime.class);

    public QPlanAttraction(String variable) {
        this(PlanAttraction.class, forVariable(variable), INITS);
    }

    public QPlanAttraction(Path<? extends PlanAttraction> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPlanAttraction(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPlanAttraction(PathMetadata metadata, PathInits inits) {
        this(PlanAttraction.class, metadata, inits);
    }

    public QPlanAttraction(Class<? extends PlanAttraction> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.attraction = inits.isInitialized("attraction") ? new com.ssafy.triptogether.attraction.domain.QAttraction(forProperty("attraction"), inits.get("attraction")) : null;
        this.plan = inits.isInitialized("plan") ? new QPlan(forProperty("plan"), inits.get("plan")) : null;
    }

}

