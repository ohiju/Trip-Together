package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.member.data.ProfileFindResponse;
import com.ssafy.triptogether.member.data.ProfileUpdateRequest;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.UNDEFINED_MEMBER;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberSaveService, MemberLoadService {

    private final MemberRepository memberRepository;

    @Transactional
    @Override
    public void updateProfile(long memberId, ProfileUpdateRequest profileUpdateRequest) {
        // find member
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new NotFoundException("ProfileUpdate", UNDEFINED_MEMBER, memberId));

        // update member
        member.update(profileUpdateRequest);
    }

    @Override
    public ProfileFindResponse findProfile(long memberId) {
        // find member & return
        return memberRepository.findProfileByMemberId(memberId)
                .orElseThrow(() -> new NotFoundException("ProfileFind", ErrorCode.CERT_CODE_NOT_MATCH, ""));
    }
}
