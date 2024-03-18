package com.ssafy.triptogether.member.controller;

import com.ssafy.triptogether.member.data.ProfileUpdateRecord;
import com.ssafy.triptogether.member.service.MemberLoadService;
import com.ssafy.triptogether.member.service.MemberSaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/member/v1")
@RestController
public class MemberController {

    private final MemberSaveService memberSaveService;
    private final MemberLoadService memberLoadService;

    @PatchMapping("/members")
    public void updateProfile(
            // @AuthenticationPrincipal 인증객체 주입받기
            @RequestBody ProfileUpdateRecord profileUpdateRecord
    ) {
        // long memberId = 인증객체.getId(); TODO: 시큐리티 인증객체 주입받기
        long memberId = 1L;
        memberSaveService.updateProfile(memberId, profileUpdateRecord);
        // TODO: ApiResponse 반환 추가
    }
}
