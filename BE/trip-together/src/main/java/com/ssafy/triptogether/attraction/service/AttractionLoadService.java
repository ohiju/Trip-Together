package com.ssafy.triptogether.attraction.service;

import java.util.List;

import com.ssafy.triptogether.attraction.data.response.AttractionDetailFindResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;

public interface AttractionLoadService {
    AttractionDetailFindResponse findAttractionDetail(long attractionId);

	List<AttractionListItemResponse> findAttractionsClick(double latitude, double longitude, double latitudeDelta, double longitudeDelta);
}
