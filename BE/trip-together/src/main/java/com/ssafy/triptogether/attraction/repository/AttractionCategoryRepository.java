package com.ssafy.triptogether.attraction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.attraction.domain.AttractionCategory;

public interface AttractionCategoryRepository extends JpaRepository<AttractionCategory, Long> {
}
