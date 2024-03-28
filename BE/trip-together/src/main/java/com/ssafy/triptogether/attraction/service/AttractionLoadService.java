package com.ssafy.triptogether.attraction.service;

import com.ssafy.triptogether.attraction.data.FlashmobListFindResponse;
import com.ssafy.triptogether.attraction.data.response.RegionsLoadResponse;
import com.ssafy.triptogether.plan.data.response.AttractionDetailFindResponse;

public interface AttractionLoadService {
	AttractionDetailFindResponse findAttractionDetail(long attractionId);

	FlashmobListFindResponse findFlashmobList(long attractionId, long memberId);

	RegionsLoadResponse regionsLoad(String name);
}
