package com.ssafy.triptogether.review.repository.query;

import java.util.List;

import com.ssafy.triptogether.plan.data.response.ReviewResponse;

public interface ReviewRepositoryCustom {
	List<ReviewResponse> findAllReviewsByAttractionId(long attractionId);
}
