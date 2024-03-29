package com.ssafy.triptogether.attraction.service;

import com.ssafy.triptogether.attraction.data.response.*;

import java.util.List;

public interface AttractionLoadService {
	AttractionDetailFindResponse findAttractionDetail(long attractionId);

	FlashmobListFindResponse findFlashmobList(long attractionId, long memberId);

	RegionsLoadResponse regionsLoad(String name);

	List<AttractionListItemResponse> findAttractionsClick(double latitude, double longitude, double latitudeDelta,
		double longitudeDelta, String category);

	List<AttractionListItemResponse> findAttractionsSearch(double latitude, double longitude, String keyword);

	AttractionFlashmobListFindResponse findAttractionFlashmobList(long memberId, double latitude, double longitude, double latitudeDelta, double longitudeDelta);
}
