package com.ssafy.triptogether.attraction.repository.query;

import static com.ssafy.triptogether.attraction.domain.QRegion.*;

import java.util.List;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.attraction.data.response.RegionLoadDetail;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class RegionRepositoryCustomImpl implements RegionRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	@Override
	public List<RegionLoadDetail> findRegionsByName(String name) {
		return queryFactory.select(Projections.constructor(RegionLoadDetail.class,
					region.id,
					region.nation,
					region.cityName,
					region.latitude,
					region.longitude
				)
			)
			.from(region)
			.where(region.cityName.containsIgnoreCase(name)
				.or(region.nation.stringValue().containsIgnoreCase(name)))
			.limit(10)
			.fetch();
	}
}
