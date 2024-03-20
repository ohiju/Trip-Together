package com.ssafy.twinklebank.member.service;

import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.member.data.AuthInfoFindResponse;
import com.ssafy.twinklebank.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.UNDEFINED_MEMBER;

@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberSaveService, MemberLoadService {

    private final MemberRepository memberRepository;

    @Override
    public AuthInfoFindResponse findAuthInfo(String memberUuid) {
        // find auth info & return
        return memberRepository.findAuthInfoById(memberUuid)
                .orElseThrow(() -> new NotFoundException("AuthInfoFind", UNDEFINED_MEMBER, memberUuid));
    }
}
