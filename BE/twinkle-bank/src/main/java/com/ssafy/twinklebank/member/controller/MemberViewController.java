package com.ssafy.twinklebank.member.controller;

import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;
import com.ssafy.twinklebank.member.service.MemberSaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor
@Controller
public class MemberViewController {

    private final MemberSaveService memberSaveService;

    @GetMapping("/join")
    public String joinPage() {
        return "join";
    }

    @PostMapping("/join")
    public String joinMember(MemberJoinRequest memberJoinRequest) {
        memberSaveService.join(memberJoinRequest);
        return "redirect:/api/";
    }
}
