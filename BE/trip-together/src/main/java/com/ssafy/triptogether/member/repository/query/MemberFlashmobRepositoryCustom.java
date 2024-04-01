package com.ssafy.triptogether.member.repository.query;

import java.util.Optional;

import com.ssafy.triptogether.flashmob.domain.MemberFlashMob;

public interface MemberFlashmobRepositoryCustom {
	Optional<MemberFlashMob> findMemberFlashmobByFlashmobIdAndMemberId(long flashmobId, long memberId);

	boolean isMaster(long flashmobId, long memberId);

	Optional<MemberFlashMob> findMemberFlashmobByFlashmobIdNotInMemberId(long flashmobId, long memberId);
}
