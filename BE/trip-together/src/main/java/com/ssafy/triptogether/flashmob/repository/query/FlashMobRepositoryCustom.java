package com.ssafy.triptogether.flashmob.repository.query;

import com.ssafy.triptogether.attraction.data.response.FlashmobElementFindResponse;
import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobFindResponse;
import com.ssafy.triptogether.flashmob.data.response.FlashMobMemberDetail;

import java.util.List;

public interface FlashMobRepositoryCustom {
    List<FlashmobElementFindResponse> findAllFlashmobElementsByAttractionId(long attractionId, long memberId);

    List<AttendingFlashmobFindResponse> findAllAttendingFlashmobElementsByMemberId(long memberId);

    List<FlashMobMemberDetail> findAllMemberInFlashMob(long flashMobId);
}
