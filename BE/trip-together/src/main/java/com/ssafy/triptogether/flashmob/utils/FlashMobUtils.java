package com.ssafy.triptogether.flashmob.utils;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.*;

import java.util.List;

import com.ssafy.triptogether.attraction.data.response.FlashmobElementFindResponse;
import com.ssafy.triptogether.flashmob.domain.FlashMob;
import com.ssafy.triptogether.flashmob.domain.MemberFlashMob;
import com.ssafy.triptogether.flashmob.domain.MemberSettlement;
import com.ssafy.triptogether.flashmob.repository.FlashMobRepository;
import com.ssafy.triptogether.flashmob.repository.MemberFlashMobRepository;
import com.ssafy.triptogether.flashmob.repository.MemberSettlementRepository;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

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

	public static MemberFlashMob findByFlashMobIdAndMemberId(MemberFlashMobRepository repository, long flashmobId,
		long memberId) {
		return repository.findMemberFlashmobByFlashmobIdAndMemberId(flashmobId, memberId)
			.orElseThrow(
				() -> new NotFoundException("FindByFlashMobIdAndMemberId", FLASHMOB_MEMBER_NOT_FOUND)
			);
	}
}
