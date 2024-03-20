package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.exceptions.category.ValidationException;
import com.ssafy.triptogether.member.data.PinSaveRequest;
import com.ssafy.triptogether.member.data.ProfileFindResponse;
import com.ssafy.triptogether.member.data.ProfileUpdateRequest;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.*;

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

    @Transactional
    @Override
    public void savePin(long memberId, PinSaveRequest pinSaveRequest) {
        // validate request
        if (!pinSaveRequest.pinNum().equals(pinSaveRequest.pinNumCheck())) {
            throw new ValidationException("PinSave", PIN_CHECK_MISS_MATCH, pinSaveRequest.pinNum(), pinSaveRequest.pinNumCheck());
        }

        // find member
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new NotFoundException("PinSave", UNDEFINED_MEMBER, memberId));

        // validate member
        if (member.getPinNum() != null) {
            throw new ValidationException("PinSave", PIN_ALREADY_EXISTS, memberId);
        }

        // save pin
        // TODO: PasswordEncoder 을 통해 핀번호 암호화
        member.savePin(pinSaveRequest);
    }

    @Override
    public ProfileFindResponse findProfile(long memberId) {
        // find member & return
        return memberRepository.findProfileByMemberId(memberId)
                .orElseThrow(() -> new NotFoundException("ProfileFind", UNDEFINED_MEMBER, memberId));
    }
}
