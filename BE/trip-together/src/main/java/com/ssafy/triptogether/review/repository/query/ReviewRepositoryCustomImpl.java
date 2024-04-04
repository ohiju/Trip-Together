package com.ssafy.triptogether.review.repository.query;

import static com.ssafy.triptogether.attraction.domain.QAttraction.*;
import static com.ssafy.triptogether.member.domain.QMember.*;
import static com.ssafy.triptogether.review.domain.QReview.*;

import java.util.List;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.plan.data.response.ReviewResponse;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ReviewRepositoryCustomImpl implements ReviewRepositoryCustom {

	private final JPAQueryFactory queryFactory;

	@Override
	public List<ReviewResponse> findAllReviewsByAttractionId(long attractionId) {
		return queryFactory.select(Projections.constructor(ReviewResponse.class,
				review.id,
				member.id,
				member.imageUrl,
				member.nickname,
				review.rating,
				review.content
			))
			.from(review)
			.innerJoin(member).on(member.id.eq(review.member.id))
			.innerJoin(attraction).on(attraction.id.eq(review.attraction.id))
			.where(attraction.id.eq(attractionId))
			.fetch();
	}
}
