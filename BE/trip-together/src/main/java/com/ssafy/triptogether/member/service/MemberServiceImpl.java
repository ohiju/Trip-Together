package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.member.data.ProfileUpdateRecord;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberSaveService, MemberLoadService {

    private final MemberRepository memberRepository;

    @Transactional
    @Override
    public void updateProfile(long memberId, ProfileUpdateRecord profileUpdateRecord) {
        // find member
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new RuntimeException("존재하지 않는 회원입니다.")); //TODO: 글로벌 예외처리 필요

        // update member
        member.update(profileUpdateRecord);
    }
}
