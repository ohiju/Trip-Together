package com.ssafy.triptogether.global.utils.distance;

import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.core.types.dsl.StringPath;

public interface NativeSqlCreator {
	NumberExpression<Double> createCalcDistanceSQL(Double longitudeCond, Double latitudeCond, StringPath dbLongitude,
		StringPath dbLatitude);

	double getDistance(double lat1, double lon1, double lat2, double lon2);
}
