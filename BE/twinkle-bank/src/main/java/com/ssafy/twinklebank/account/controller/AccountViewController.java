package com.ssafy.twinklebank.account.controller;

import com.ssafy.twinklebank.account.data.request.AccountSaveRequest;
import com.ssafy.twinklebank.account.service.AccountSaveService;
import com.ssafy.twinklebank.auth.utils.SecurityMember;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor
@Controller
public class AccountViewController {

    private final AccountSaveService accountSaveService;

    @GetMapping("/account-register")
    public String registerAccountPage() {
        return "account_register";
    }

    @PostMapping("/account-register")
    public String registerAccount(
        AccountSaveRequest accountSaveRequest,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        long memberId = securityMember.getId();
        accountSaveService.saveAccount(memberId, accountSaveRequest);
        return "redirect:/api/";
    }
}
