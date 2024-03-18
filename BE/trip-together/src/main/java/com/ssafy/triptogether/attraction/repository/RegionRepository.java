package com.ssafy.triptogether.attraction.repository;

import com.ssafy.triptogether.attraction.domain.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region, Long> {
}
