package com.ssafy.triptogether.global.utils.distance;

import org.springframework.stereotype.Component;

import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberExpression;
import com.querydsl.core.types.dsl.StringPath;

@Component
public class MysqlNativeSqlCreator implements NativeSqlCreator {
	final double EARTH_RADIUS = 6356.7523;
	public NumberExpression<Double> createCalcDistanceSQL(Double latitudeCond, Double longitudeCond,
		StringPath dbLatitude, StringPath dbLongitude) {
		return Expressions.numberTemplate(Double.class,"ST_Distance_Sphere({0}, {1})",
			Expressions.stringTemplate("POINT({0}, {1})",
				latitudeCond,
				longitudeCond
			),
			Expressions.stringTemplate("POINT({0}, {1})",
				dbLatitude,
				dbLongitude
			)
		);
	}

	@Override
	public double getDistance(double lat1, double lon1, double lat2, double lon2) {
		double dLat = Math.toRadians(lat2 - lat1);
		double dLon = Math.toRadians(lon2 - lon1);

		double a = Math.sin(dLat/2)* Math.sin(dLat/2)+ Math.cos(Math.toRadians(lat1))* Math.cos(Math.toRadians(lat2))* Math.sin(dLon/2)* Math.sin(dLon/2);
		double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		double d =EARTH_RADIUS* c * 1000;    // Distance in m
		return d;
	}
}
