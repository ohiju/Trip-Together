package com.ssafy.triptogether.attraction.repository.query;

import com.ssafy.triptogether.attraction.data.response.AttractionFlashmobListItemResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;

import java.util.List;

public interface AttractionRepositoryCustom {
	List<AttractionListItemResponse> findAttractionClick(double latitude, double longitude, double distance, String category);
	List<AttractionListItemResponse> findAttractionSearch(double latitude, double longitude, String keyword);

    List<AttractionFlashmobListItemResponse> findAllAttractionFlashmobByConditions(double latitude, double longitude, double distance);
}
