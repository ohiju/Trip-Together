package com.ssafy.triptogether.attraction.service;

import java.util.List;

import com.ssafy.triptogether.attraction.data.response.AttractionDetailFindResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.attraction.data.FlashmobListFindResponse;

public interface AttractionLoadService {
    AttractionDetailFindResponse findAttractionDetail(long attractionId);

	List<AttractionListItemResponse> findAttractionsClick(double latitude, double longitude, double latitudeDelta, double longitudeDelta, String category);

    FlashmobListFindResponse findFlashmobList(long attractionId, long memberId);

	List<AttractionListItemResponse> findAttractionsSearch(double latitude, double longitude, String keyword);
}
