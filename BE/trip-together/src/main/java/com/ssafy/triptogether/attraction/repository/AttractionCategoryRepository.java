package com.ssafy.triptogether.attraction.repository;

import com.ssafy.triptogether.attraction.domain.AttractionCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttractionCategoryRepository extends JpaRepository<AttractionCategory, Long> {
}
