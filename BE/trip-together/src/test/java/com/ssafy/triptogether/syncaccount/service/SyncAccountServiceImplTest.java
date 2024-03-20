package com.ssafy.triptogether.syncaccount.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.ssafy.triptogether.member.domain.Gender;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsLoadResponse;
import com.ssafy.triptogether.syncaccount.domain.SyncAccount;
import com.ssafy.triptogether.syncaccount.repository.SyncAccountRepository;

@ExtendWith(MockitoExtension.class)
class SyncAccountServiceImplTest {
	@InjectMocks
	SyncAccountServiceImpl syncAccountService;
	@Mock
	SyncAccountRepository syncAccountRepository;

	@Nested
	@DisplayName("연동 계좌 목록 조회")
	class SyncAccountsLoadTest {
		List<SyncAccount> syncAccounts;

		@BeforeEach
		void setUp() {
			Member member = Member.builder()
				.uuid("")
				.gender(Gender.MALE)
				.nickname("")
				.birth(LocalDate.now())
				.build();
			SyncAccount syncAccount1 = SyncAccount.builder()
				.uuid("test1")
				.name("테스트 계좌")
				.num("123-123")
				.isMain(true)
				.member(member)
				.build();
			SyncAccount syncAccount2 = SyncAccount.builder()
				.uuid("test2")
				.name("테스트 계좌")
				.num("456-456")
				.isMain(false)
				.member(member)
				.build();
			syncAccounts = Arrays.asList(syncAccount1, syncAccount2);
			// given
			given(syncAccountRepository.findByMemberId(anyLong())).willReturn(syncAccounts);
		}

		@Test
		void syncAccountsLoad() {
			// when
			SyncAccountsLoadResponse response = syncAccountService.syncAccountsLoad(1L);
			//then
			assertAll(
				() -> assertEquals(2, response.syncAccountsDetail().size(), "연동 계좌 목록의 크기가 예상과 다릅니다."),
				() -> assertEquals("test1", response.syncAccountsDetail().get(0).uuid(), "첫 번쨰 연동 계좌가 예상과 다릅니다.")
			);
			verify(syncAccountRepository, times(1)).findByMemberId(1L);
		}
	}
}