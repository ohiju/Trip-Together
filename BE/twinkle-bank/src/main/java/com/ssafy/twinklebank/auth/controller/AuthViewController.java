package com.ssafy.twinklebank.auth.controller;

import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;
import com.ssafy.twinklebank.member.service.MemberSaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor
@Controller
public class AuthViewController {

    private final MemberSaveService memberSaveService;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/join")
    public String join() {
        return "join";
    }

    @PostMapping("/join")
    public void joinMember(MemberJoinRequest memberJoinRequest) {
        memberSaveService.join(memberJoinRequest);
    }

    @GetMapping("/account-register")
    public String registerAccount() {
        return "account_register";
    }
}
