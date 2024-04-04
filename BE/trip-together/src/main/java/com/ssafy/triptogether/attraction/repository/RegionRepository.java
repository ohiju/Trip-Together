package com.ssafy.triptogether.attraction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.attraction.domain.Region;
import com.ssafy.triptogether.attraction.repository.query.RegionRepositoryCustom;

public interface RegionRepository extends JpaRepository<Region, Long>, RegionRepositoryCustom {
}
