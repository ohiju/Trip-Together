package com.ssafy.twinklebank.account.controller;

import com.ssafy.twinklebank.account.data.AccountDeleteRequest;
import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.data.AddAccountRequest;
import com.ssafy.twinklebank.account.service.AccountLoadService;
import com.ssafy.twinklebank.account.service.AccountSaveService;
import com.ssafy.twinklebank.auth.utils.SecurityMember;
import com.ssafy.twinklebank.global.data.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.ssafy.twinklebank.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.*;

@RequestMapping("account/v1/accounts")
@RestController
@RequiredArgsConstructor
public class AccountController {

    private final AccountSaveService accountSaveService;
    private final AccountLoadService accountLoadService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<AccountResponse>>> getUserAccountList(
        @AuthenticationPrincipal SecurityMember securityMember,
        @RequestParam("client_id") String clientId
    ) {
        long userId = securityMember.getId();
        List<AccountResponse> accountResponseList = accountLoadService.getAccounts(clientId, userId);

        return ApiResponse.toResponseEntity(OK, SUCCESS_GET_ACCOUNT_LIST, accountResponseList);
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Void>> addLinkedAccount(
        @RequestBody @Valid AddAccountRequest addAccountRequest,
        @RequestParam("client_id") String clientId
    ) {
        accountSaveService.addLinkedAccount(clientId, addAccountRequest);
        return ApiResponse.emptyResponse(CREATED, CREATED_LINKED_ACCOUNT);
    }

    @DeleteMapping
    public ResponseEntity<ApiResponse<Void>> deleteLinkedAccount(
            @AuthenticationPrincipal SecurityMember securityMember,
            @RequestParam("client_id") String clientId,
            @Valid @RequestBody AccountDeleteRequest accountDeleteRequest
    ) {
        Long memberId = securityMember.getId();
        accountSaveService.deleteLinkedAccount(clientId, memberId, accountDeleteRequest);
        return ApiResponse.emptyResponse(NO_CONTENT, DELETE_LINKED_ACCOUNT);
    }
}
