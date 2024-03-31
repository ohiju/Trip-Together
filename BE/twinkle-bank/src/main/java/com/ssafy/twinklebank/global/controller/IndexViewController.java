package com.ssafy.twinklebank.global.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@Controller
public class IndexViewController {
    @GetMapping("/")
    public String index() {
        return "index";
    }
}
