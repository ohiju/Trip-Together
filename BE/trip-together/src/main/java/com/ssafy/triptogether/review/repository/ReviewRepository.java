package com.ssafy.triptogether.review.repository;

import com.ssafy.triptogether.review.domain.Review;
import com.ssafy.triptogether.review.repository.query.ReviewRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long>, ReviewRepositoryCustom {
}
