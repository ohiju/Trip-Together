package com.ssafy.triptogether.attraction.repository.query;

import java.util.List;

import com.ssafy.triptogether.attraction.data.response.AttractionFlashmobListItemResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponseWD;

public interface AttractionRepositoryCustom {
	List<AttractionListItemResponseWD> findAttractionClick(double latitude, double longitude, double distance,
		String category);

	List<AttractionListItemResponse> findAttractionSearch(double latitude, double longitude, String keyword);

	List<AttractionFlashmobListItemResponse> findAllAttractionFlashmobByConditions(double latitude, double longitude,
		double distance);
}
