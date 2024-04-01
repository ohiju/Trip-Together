package com.ssafy.triptogether.review.utils;

import java.util.List;

import com.ssafy.triptogether.plan.data.response.ReviewResponse;
import com.ssafy.triptogether.review.repository.ReviewRepository;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReviewUtils {

	public static List<ReviewResponse> findAllByAttractionId(ReviewRepository repository, long attractionId) {
		return repository.findAllReviewsByAttractionId(attractionId);
	}
}
