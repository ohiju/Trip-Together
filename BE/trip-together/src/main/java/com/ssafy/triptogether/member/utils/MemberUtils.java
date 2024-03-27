package com.ssafy.triptogether.member.utils;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.UNDEFINED_MEMBER;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberUtils {
    public static Member findByMemberId(MemberRepository repository, Long memberId) {
        return repository.findById(memberId)
                .orElseThrow(
                        () -> new NotFoundException("FindByMemberId", UNDEFINED_MEMBER)
                );
    }

    public static Member findByUuid(MemberRepository repository, String uuid) {
        return repository.findMemberByUuid(uuid)
                .orElseThrow(
                        () -> new NotFoundException("findMemberByUuid", UNDEFINED_MEMBER)
                );
    }
}
