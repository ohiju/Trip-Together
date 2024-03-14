package com.ssafy.triptogether.attraction.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAttractionCategory is a Querydsl query type for AttractionCategory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAttractionCategory extends EntityPathBase<AttractionCategory> {

    private static final long serialVersionUID = -1624123344L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAttractionCategory attractionCategory = new QAttractionCategory("attractionCategory");

    public final QAttraction attraction;

    public final QCategory category;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public QAttractionCategory(String variable) {
        this(AttractionCategory.class, forVariable(variable), INITS);
    }

    public QAttractionCategory(Path<? extends AttractionCategory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAttractionCategory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAttractionCategory(PathMetadata metadata, PathInits inits) {
        this(AttractionCategory.class, metadata, inits);
    }

    public QAttractionCategory(Class<? extends AttractionCategory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.attraction = inits.isInitialized("attraction") ? new QAttraction(forProperty("attraction"), inits.get("attraction")) : null;
        this.category = inits.isInitialized("category") ? new QCategory(forProperty("category")) : null;
    }

}

