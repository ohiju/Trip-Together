package com.ssafy.triptogether.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.review.domain.Review;
import com.ssafy.triptogether.review.repository.query.ReviewRepositoryCustom;

public interface ReviewRepository extends JpaRepository<Review, Long>, ReviewRepositoryCustom {
}
