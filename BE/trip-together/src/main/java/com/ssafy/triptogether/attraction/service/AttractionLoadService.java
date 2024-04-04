package com.ssafy.triptogether.attraction.service;

import java.util.List;

import com.ssafy.triptogether.attraction.data.response.AttractionDetailFindResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionFlashmobListFindResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponseWD;
import com.ssafy.triptogether.attraction.data.response.FlashmobListFindResponse;
import com.ssafy.triptogether.attraction.data.response.RegionsLoadResponse;

public interface AttractionLoadService {
	AttractionDetailFindResponse findAttractionDetail(long attractionId);

	FlashmobListFindResponse findFlashmobList(long attractionId, long memberId);

	RegionsLoadResponse regionsLoad(String name);

	List<AttractionListItemResponseWD> findAttractionsClick(double latitude, double longitude, double latitudeDelta,
		double longitudeDelta, String category);

	List<AttractionListItemResponse> findAttractionsSearch(double latitude, double longitude, String keyword);

	AttractionFlashmobListFindResponse findAttractionFlashmobList(long memberId, double latitude, double longitude,
		double latitudeDelta, double longitudeDelta);
}
