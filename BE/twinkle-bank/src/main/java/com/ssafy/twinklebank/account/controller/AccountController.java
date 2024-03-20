package com.ssafy.twinklebank.account.controller;

import static com.ssafy.twinklebank.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.*;

import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.data.AddAccountRequest;
import com.ssafy.twinklebank.account.service.AccountLoadService;
import com.ssafy.twinklebank.account.service.AccountSaveService;
import com.ssafy.twinklebank.global.data.response.ApiResponse;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("account/v1")
@RestController
@RequiredArgsConstructor
public class AccountController {

    private final AccountSaveService accountSaveService;
    private final AccountLoadService accountLoadService;

    @GetMapping("accounts")
    public ResponseEntity<ApiResponse<List<AccountResponse>>> getUserAccountList(
//        @AuthenticationPrincipal ,
        ) {
        long userId = 1L;
        long clientId = 1L;
        List<AccountResponse> accountResponseList = accountLoadService.getAccounts(clientId, userId);

        return ApiResponse.toResponseEntity(OK, SUCCESS_GET_ACCOUNT_LIST, accountResponseList);
    }

    // TODO : 완성하기
    @PostMapping("accounts")
    public ResponseEntity<ApiResponse<Void>> addLinkedAccount(
//        @AuthenticationPrincipal ,
            @RequestBody AddAccountRequest addAccountRequest
            ) {
        long clientId = 1L;
        accountSaveService.addLinkedAccount(clientId, addAccountRequest);
        return null;
    }
}
