package com.ssafy.triptogether.attraction.repository.query;

import java.util.List;

import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;

public interface AttractionRepositoryCustom {
	List<AttractionListItemResponse> findAttractionClick(double latitude, double longitude, double distance);
}
