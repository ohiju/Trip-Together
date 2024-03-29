package com.ssafy.triptogether.member.utils;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.*;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.flashmob.domain.MemberFlashMob;
import com.ssafy.triptogether.flashmob.repository.MemberFlashMobRepository;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberFlashmobUtils {

    public static MemberFlashMob findByFlashmobIdAndMemberId(
        MemberFlashMobRepository repository, long flashmobId, long memberId
    ) {
        return repository.findMemberFlashmobByFlashmobIdAndMemberId(flashmobId, memberId)
            .orElseThrow(() -> new NotFoundException("FindByFlashmobIdAndMemberId", UNDEFINED_MEMBER_FLASHMOB));
    }

    public static MemberFlashMob findByFlashmobIdNotInMemberId(
        MemberFlashMobRepository repository, long flashmobId, long memberId
    ) {
        return repository.findMemberFlashmobByFlashmobIdNotInMemberId(flashmobId, memberId)
            .orElseThrow(() -> new NotFoundException("findByFlashmobId", FLASHMOB_MEMBER_NOT_FOUND));
    }
}
