package com.ssafy.triptogether.attraction.repository;

import java.util.Optional;

import com.ssafy.triptogether.attraction.domain.Attraction;
import com.ssafy.triptogether.attraction.repository.query.AttractionRepositoryCustom;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AttractionRepository extends JpaRepository<Attraction, Long>, AttractionRepositoryCustom {
	Optional<Attraction> findByBusinessNum(String businessNum);
}
