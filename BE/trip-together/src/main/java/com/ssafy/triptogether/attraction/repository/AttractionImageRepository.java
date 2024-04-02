package com.ssafy.triptogether.attraction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.attraction.domain.AttractionImage;

public interface AttractionImageRepository extends JpaRepository<AttractionImage, Long> {
}
