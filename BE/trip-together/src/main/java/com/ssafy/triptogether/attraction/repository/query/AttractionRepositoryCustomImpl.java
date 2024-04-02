package com.ssafy.triptogether.attraction.repository.query;

import static com.querydsl.core.types.ExpressionUtils.*;
import static com.ssafy.triptogether.attraction.domain.QAttraction.*;
import static com.ssafy.triptogether.attraction.domain.QAttractionCategory.*;
import static com.ssafy.triptogether.flashmob.domain.QFlashMob.*;

import java.util.List;

import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.attraction.data.response.AttractionFlashmobListItemResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponseWD;
import com.ssafy.triptogether.global.utils.distance.MysqlNativeSqlCreator;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AttractionRepositoryCustomImpl implements AttractionRepositoryCustom {

	private final JPAQueryFactory queryFactory;
	private final MysqlNativeSqlCreator mysqlNativeSqlCreator;

	@Override
	public List<AttractionListItemResponseWD> findAttractionClick(double latitude, double longitude, double distance,
		String category) {
		category = (category == null) ? "" : category;
		return queryFactory.select(Projections.constructor(AttractionListItemResponseWD.class,
				attraction.id,
				attraction.thumbnailImageUrl,
				attraction.name,
				attraction.address,
				attraction.avgRating,
				attraction.avgPrice,
				attraction.longitude,
				attraction.latitude,
				distanceTo(latitude, longitude).as("distance")
			))
			.from(attraction)
			.leftJoin(attractionCategory).on()
			.where(
				distanceTo(latitude, longitude).loe(distance),
				searchCategory(category))
			.orderBy(Expressions.numberTemplate(Double.class, "distance").asc())
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
				attraction.latitude,
				attraction.longitude
			))
			.from(attraction)
			.where(attraction.name.like("%" + keyword + "%"))
			.orderBy(distanceTo(latitude, longitude).asc())
			.limit(5)
			.fetch();
	}

	@Override
	public List<AttractionFlashmobListItemResponse> findAllAttractionFlashmobByConditions(double latitude,
		double longitude, double distance) {
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
			.where(distanceTo(latitude, longitude).loe(distance))
			.orderBy(attraction.avgRating.desc())
			.fetch();
	}

	private BooleanExpression searchCategory(String category) {
		if (category.isEmpty()) {
			return null;
		}
		return attractionCategory.category.name.like("%" + category + "%");
	}

	private NumberExpression<Double> distanceTo(double latitude, double longitude) {
		return mysqlNativeSqlCreator.createCalcDistanceSQL(
			latitude,
			longitude,
			attraction.latitude,
			attraction.longitude
		);
	}
}
