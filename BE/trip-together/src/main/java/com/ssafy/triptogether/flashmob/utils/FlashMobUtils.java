package com.ssafy.triptogether.flashmob.utils;

import com.ssafy.triptogether.attraction.data.response.FlashmobElementFindResponse;
import com.ssafy.triptogether.flashmob.domain.FlashMob;
import com.ssafy.triptogether.flashmob.repository.FlashMobRepository;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.List;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.UNDEFINED_FLASHMOB;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FlashMobUtils {
    public static FlashMob findByFlashmobId(FlashMobRepository repository, long flashmobId) {
        return repository.findById(flashmobId)
            .orElseThrow(() -> new NotFoundException("FindByFlashmobId", UNDEFINED_FLASHMOB));
    }

    public static List<FlashmobElementFindResponse> findAllFlashmobElementsByAttractionId(
        FlashMobRepository repository, long attractionId, long memberId
    ) {
        return repository.findAllFlashmobElementsByAttractionId(attractionId, memberId);
    }
}
