package com.ssafy.triptogether.review.repository.query;

import com.ssafy.triptogether.plan.data.response.ReviewResponse;

import java.util.List;

public interface ReviewRepositoryCustom {
    List<ReviewResponse> findAllReviewsByAttractionId(long attractionId);
}
