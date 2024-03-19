package com.ssafy.twinklebank.account.controller;

import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.data.GetAccountListRequest;
import com.ssafy.twinklebank.account.service.AccountLoadService;
import com.ssafy.twinklebank.account.service.AccountSaveService;
import com.ssafy.twinklebank.global.data.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("account/v1")
@RestController
@RequiredArgsConstructor
public class AccountController {

    private final AccountSaveService accountSaveService;
    private final AccountLoadService accountLoadService;

    @GetMapping("accounts")
    public ResponseEntity<ApiResponse<List>> getUserAccountList(
//        @AuthenticationPrincipal ,
            @RequestBody GetAccountListRequest getAccountListRequest
        ) {
        Long userId = 1L;
        String tranId = getAccountListRequest.tranId();

        List<AccountResponse> a = accountLoadService.getAccounts(tranId);

        System.out.println();


        return null;
    }
}
