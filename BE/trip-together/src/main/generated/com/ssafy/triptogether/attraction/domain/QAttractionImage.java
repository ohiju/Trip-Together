package com.ssafy.triptogether.attraction.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAttractionImage is a Querydsl query type for AttractionImage
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAttractionImage extends EntityPathBase<AttractionImage> {

    private static final long serialVersionUID = 851094377L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAttractionImage attractionImage = new QAttractionImage("attractionImage");

    public final com.ssafy.triptogether.global.domain.QBaseEntity _super = new com.ssafy.triptogether.global.domain.QBaseEntity(this);

    public final QAttraction attraction;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath imageUrl = createString("imageUrl");

    public QAttractionImage(String variable) {
        this(AttractionImage.class, forVariable(variable), INITS);
    }

    public QAttractionImage(Path<? extends AttractionImage> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAttractionImage(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAttractionImage(PathMetadata metadata, PathInits inits) {
        this(AttractionImage.class, metadata, inits);
    }

    public QAttractionImage(Class<? extends AttractionImage> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.attraction = inits.isInitialized("attraction") ? new QAttraction(forProperty("attraction"), inits.get("attraction")) : null;
    }

}

