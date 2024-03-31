package com.ssafy.triptogether.flashmob.repository.query;

import java.util.List;

import com.ssafy.triptogether.attraction.data.response.FlashmobElementFindResponse;
import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobFindResponse;

public interface FlashMobRepositoryCustom {
	List<FlashmobElementFindResponse> findAllFlashmobElementsByAttractionId(long attractionId, long memberId);

	List<AttendingFlashmobFindResponse> findAllAttendingFlashmobElementsByMemberId(long memberId);
}
