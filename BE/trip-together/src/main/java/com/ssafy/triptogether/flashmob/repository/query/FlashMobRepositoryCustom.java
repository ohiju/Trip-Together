package com.ssafy.triptogether.flashmob.repository.query;

import com.ssafy.triptogether.attraction.data.FlashmobElementFindResponse;

import java.util.List;

public interface FlashMobRepositoryCustom {
    List<FlashmobElementFindResponse> findAllFlashmobElementsByAttractionId(long attractionId, long memberId);
}
