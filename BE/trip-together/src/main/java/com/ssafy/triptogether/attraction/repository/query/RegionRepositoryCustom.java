package com.ssafy.triptogether.attraction.repository.query;

import java.util.List;

import com.ssafy.triptogether.attraction.data.response.RegionLoadDetail;

public interface RegionRepositoryCustom {
	List<RegionLoadDetail> findRegionsByName(String name);
}
