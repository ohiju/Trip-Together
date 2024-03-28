package com.ssafy.triptogether.flashmob.service;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.*;

import com.ssafy.triptogether.flashmob.data.request.ApplyFlashmobRequest;
import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobFindResponse;
import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobListFindResponse;
import com.ssafy.triptogether.flashmob.domain.FlashMob;
import com.ssafy.triptogether.flashmob.repository.FlashMobRepository;
import com.ssafy.triptogether.flashmob.utils.FlashMobUtils;
import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.exceptions.category.ForbiddenException;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.domain.MemberFlashMob;
import com.ssafy.triptogether.member.domain.RoomStatus;
import com.ssafy.triptogether.member.repository.MemberFlashMobRepository;
import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.member.utils.MemberFlashmobUtils;
import com.ssafy.triptogether.member.utils.MemberUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class FlashMobServiceImpl implements FlashMobSaveService, FlashMobLoadService {

    private final FlashMobRepository flashMobRepository;
    private final MemberFlashMobRepository memberFlashMobRepository;
    private final MemberRepository memberRepository;

    @Transactional
    @Override
    public void sendAttendanceRequest(long flashmobId, long memberId) {
        // find member & flashmob
        Member member = MemberUtils.findByMemberId(memberRepository, memberId);
        FlashMob flashMob = flashMobRepository.findById(flashmobId)
            .orElseThrow(() -> new NotFoundException("SendAttendanceRequest", UNDEFINED_FLASHMOB));

        // create member flashmob & save
        MemberFlashMob memberFlashMob = MemberFlashMob.builder()
            .isMaster(false)
            .roomStatus(RoomStatus.WAIT)
            .member(member)
            .flashMob(flashMob)
            .build();
        memberFlashMobRepository.save(memberFlashMob);

        // send chat message
        // TODO: 해당 채팅방에 참가요청에 대한 채팅 메시지 전송
    }

    @Transactional
    @Override
    public void checkDeniedFlashmob(long flashmobId, long memberId) {
        // find member flashmob
        MemberFlashMob memberFlashMob = MemberFlashmobUtils.findByFlashmobIdAndMemberId(memberFlashMobRepository, flashmobId, memberId);

        // check room status
        memberFlashMob.checkDenial();
    }

    @Override
    public void cancelFlashmob(long flashmobId, long memberId) {
        // find member flashmob
        MemberFlashMob memberFlashMob = MemberFlashmobUtils.findByFlashmobIdAndMemberId(memberFlashMobRepository, flashmobId, memberId);

        // cancel attendance request
        memberFlashMobRepository.delete(memberFlashMob);
    }

    @Transactional
    @Override
    public boolean applyFlashmob(
        long flashmobId, long memberId, ApplyFlashmobRequest applyFlashmobRequest, long masterId) {
        FlashMob flashMob = FlashMobUtils.findByFlashmobId(flashMobRepository, flashmobId);
        boolean isMaster = memberFlashMobRepository.isMaster(flashmobId, masterId);
        if (!isMaster) {
            throw new ForbiddenException("applyFlashmob", MEMBER_NOT_MASTER, masterId);
        }

        MemberFlashMob memberFlashMob = MemberFlashmobUtils.findByFlashmobIdAndMemberId(memberFlashMobRepository, flashmobId, memberId);
        if (applyFlashmobRequest.status().equals(RoomStatus.ATTEND)) {
            memberFlashMob.applyAcceptance();
            return true; // 수락되었을 시에만 true 반환
        } else if (applyFlashmobRequest.status().equals(RoomStatus.REFUSE_UNCHECK)) {
            memberFlashMob.applyDenial();
        } else {
            throw new BadRequestException("applyFlashmob", BAD_STATUS_REQUEST, applyFlashmobRequest.status());
        }
        return false;
    }

    @Override
    public AttendingFlashmobListFindResponse findAttendingFlashmobList(long memberId) {
        // find attending flashmobs
        List<AttendingFlashmobFindResponse> elements = flashMobRepository.findAllAttendingFlashmobElementsByMemberId(memberId);

        // create response & return
        return AttendingFlashmobListFindResponse.builder().elements(elements).build();
    }
}
