package com.ssafy.triptogether.attraction.repository.query;

import static com.ssafy.triptogether.attraction.domain.QAttraction.*;

import java.util.List;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.attraction.domain.QAttraction;
import com.ssafy.triptogether.global.utils.distance.MysqlNativeSqlCreator;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AttractionRepositoryCustomImpl implements AttractionRepositoryCustom {

	private final JPAQueryFactory queryFactory;

	@Override
	public List<AttractionListItemResponse> findAttractionClick(double latitude, double longitude, double distance) {
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
			).loe(distance))
			.fetch();
	}
}
