package com.ssafy.triptogether.member.utils;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.member.domain.MemberFlashMob;
import com.ssafy.triptogether.member.repository.MemberFlashMobRepository;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.UNDEFINED_MEMBER_FLASHMOB;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberFlashmobUtils {

    public static MemberFlashMob findByFlashmobIdAndMemberId(
        MemberFlashMobRepository repository, long flashmobId, long memberId
    ) {
        return repository.findMemberFlashmobByFlashmobIdAndMemberId(flashmobId, memberId)
            .orElseThrow(() -> new NotFoundException("FindByFlashmobIdAndMemberId", UNDEFINED_MEMBER_FLASHMOB));
    }
}
