package com.ssafy.triptogether.attraction.repository.query;

import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.attraction.data.response.AttractionFlashmobListItemResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.global.utils.distance.MysqlNativeSqlCreator;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.querydsl.core.types.ExpressionUtils.count;
import static com.ssafy.triptogether.attraction.domain.QAttraction.attraction;
import static com.ssafy.triptogether.flashmob.domain.QFlashMob.flashMob;

@RequiredArgsConstructor
public class AttractionRepositoryCustomImpl implements AttractionRepositoryCustom {

	private final JPAQueryFactory queryFactory;

	@Override
	public List<AttractionListItemResponse> findAttractionClick(double latitude, double longitude, double distance, String category) {
		category = (category==null)?"":category;
		return queryFactory.select(Projections.constructor(AttractionListItemResponse.class,
				attraction.id,
				attraction.thumbnailImageUrl,
				attraction.name,
				attraction.address,
				attraction.avgRating,
				attraction.avgPrice,
				attraction.longitude,
				attraction.latitude
			))
			.from(attraction)
			.where(new MysqlNativeSqlCreator().createCalcDistanceSQL(
				latitude,
				longitude,
				attraction.latitude,
				attraction.longitude
			).loe(distance)
				.and(attraction.name.like("%"+category+"%")))
			.orderBy(attraction.avgRating.desc())
			.fetch();
	}

	@Override
	public List<AttractionListItemResponse> findAttractionSearch(double latitude, double longitude, String keyword) {
		return queryFactory.select(Projections.constructor(AttractionListItemResponse.class,
				attraction.id,
				attraction.thumbnailImageUrl,
				attraction.name,
				attraction.address,
				attraction.avgRating,
				attraction.avgPrice,
				attraction.longitude,
				attraction.latitude
			))
			.from(attraction)
			.where(attraction.name.like("%"+keyword+"%"))
			.orderBy(new MysqlNativeSqlCreator().createCalcDistanceSQL(
				latitude,
				longitude,
				attraction.latitude,
				attraction.longitude
			).asc())
			.limit(5)
			.fetch();
	}

	@Override
	public List<AttractionFlashmobListItemResponse> findAllAttractionFlashmobByConditions(double latitude, double longitude, double distance) {
		return queryFactory.select(Projections.constructor(AttractionFlashmobListItemResponse.class,
				attraction.id,
				attraction.thumbnailImageUrl,
				attraction.name,
				attraction.address,
				attraction.avgRating,
				attraction.avgPrice,
				attraction.latitude,
				attraction.longitude,
				ExpressionUtils.as(
					JPAExpressions.select(count(flashMob.id))
						.from(flashMob)
						.where(flashMob.attraction.id.eq(attraction.id)),
					"flashmobCount"
				)
			))
			.from(attraction)
			.where(new MysqlNativeSqlCreator().createCalcDistanceSQL(
				latitude,
				longitude,
				attraction.latitude,
				attraction.longitude
			).loe(distance))
			.orderBy(attraction.avgRating.desc())
			.fetch();
	}
}
