package com.ssafy.triptogether.attraction.repository;

import com.ssafy.triptogether.attraction.domain.Region;
import com.ssafy.triptogether.attraction.repository.query.RegionRepositoryCustom;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region, Long>, RegionRepositoryCustom {
}
