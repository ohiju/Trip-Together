package com.ssafy.twinklebank.auth.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthViewController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/page/member/join")
    public String join() {
        return "join";
    }

    @GetMapping("/page/account/register")
    public String registerAccount() {
        return "account_register";
    }
}
