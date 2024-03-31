package com.ssafy.triptogether.attraction.service;

import com.ssafy.triptogether.attraction.data.request.FlashmobCreateRequest;
import com.ssafy.triptogether.attraction.data.request.FlashmobUpdateRequest;
import com.ssafy.triptogether.attraction.data.response.FlashmobUpdateResponse;

public interface AttractionSaveService {
	FlashmobUpdateResponse updateFlashmob(long flashmobId, FlashmobUpdateRequest flashmobUpdateRequest);

	long createFlashmob(Long memberId, long attractionId, FlashmobCreateRequest flashmobCreateRequest);
}
