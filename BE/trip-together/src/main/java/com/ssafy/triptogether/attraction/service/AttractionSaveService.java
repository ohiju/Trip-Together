package com.ssafy.triptogether.attraction.service;

import com.ssafy.triptogether.attraction.data.FlashmobCreateRequest;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateRequest;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateResponse;

public interface AttractionSaveService {
    FlashmobUpdateResponse updateFlashmob(long flashmobId, FlashmobUpdateRequest flashmobUpdateRequest);

	long createFlashmob(Long memberId, long attractionId, FlashmobCreateRequest flashmobCreateRequest);
}
