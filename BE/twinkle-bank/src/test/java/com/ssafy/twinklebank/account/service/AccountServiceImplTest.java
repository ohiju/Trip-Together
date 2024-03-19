package com.ssafy.twinklebank.account.service;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.assertj.core.api.Assertions.assertThat;

import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.repository.AccountRepository;

@ExtendWith(MockitoExtension.class)
public class AccountServiceImplTest {
	@InjectMocks
	AccountServiceImpl accountService;
	@Mock
	AccountRepository accountRepository;

	@Test
	@DisplayName("[GetAccountList][Success] get account list")
	void getAccountList() {
		// given
		long memberId = 1L;
		String appId = "T0000001U0000000002";
		List<AccountResponse> accounts = accountRepository.getAccountList(appId, memberId);
		assertThat(accounts.size()).isEqualTo(1);
	}
}
