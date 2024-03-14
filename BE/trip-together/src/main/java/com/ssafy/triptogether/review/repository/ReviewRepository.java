package com.ssafy.triptogether.review.repository;

import com.ssafy.triptogether.review.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
