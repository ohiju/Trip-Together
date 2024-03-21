package com.ssafy.triptogether.syncaccount.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.utils.AuthUtils;
import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.member.domain.Gender;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.syncaccount.data.request.MainSyncAccountUpdateRequest;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsDetail;
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
		List<SyncAccountsDetail> syncAccounts;

		@BeforeEach
		void setUp() {
			SyncAccountsDetail syncAccount1 = SyncAccountsDetail.builder()
				.uuid("test1")
				.name("테스트 계좌")
				.accountNum("123-123")
				.isMain(true)
				.build();
			SyncAccountsDetail syncAccount2 = SyncAccountsDetail.builder()
				.uuid("test1")
				.name("테스트 계좌")
				.accountNum("123-123")
				.isMain(true)
				.build();
			syncAccounts = Arrays.asList(syncAccount1, syncAccount2);
		}

		@Test
		void syncAccountsLoad() {
			// given
			given(syncAccountRepository.memberSyncAccountsLoad(anyLong())).willReturn(syncAccounts);
			// when
			SyncAccountsLoadResponse response = syncAccountService.syncAccountsLoad(1L);
			//then
			assertAll(
				() -> assertEquals(2, response.syncAccountsDetail().size(), "연동 계좌 목록의 크기가 예상과 다릅니다."),
				() -> assertEquals("test1", response.syncAccountsDetail().get(0).uuid(), "첫 번쨰 연동 계좌가 예상과 다릅니다.")
			);
			verify(syncAccountRepository, times(1)).memberSyncAccountsLoad(1L);
		}
	}

	@Nested
	@MockitoSettings(strictness = Strictness.LENIENT)
	@DisplayName("사용자의 연동 계좌의 주계좌 설정 변경")
	class MainSyncAccountUpdateTest {
		Long memberId = 1L;
		Member member;
		SyncAccount currentMainSyncAccount, newMainSyncAccount;
		PinVerifyRequest pinVerifyRequest;
		MainSyncAccountUpdateRequest mainSyncAccountUpdateRequest;

		@BeforeEach
		void setUp() {
			member = Member.builder()
				.gender(Gender.MALE)
				.nickname("TestUser")
				.uuid("TestUser")
				.birth(LocalDate.now())
				.build();
			currentMainSyncAccount = SyncAccount.builder()
				.uuid("currentMain")
				.num("123-123")
				.name("currentMain")
				.isMain(true)
				.member(member)
				.build();
			newMainSyncAccount = SyncAccount.builder()
				.uuid("newMain")
				.num("456-456")
				.name("newMain")
				.isMain(false)
				.member(member)
				.build();
			mainSyncAccountUpdateRequest = MainSyncAccountUpdateRequest.builder()
				.uuid("newMain")
				.pinNum("1234")
				.build();
			pinVerifyRequest = PinVerifyRequest.builder()
				.pinNum("1234")
				.build();
		}

		@Test
		@DisplayName("주계좌 변경 성공")
		void mainSyncAccountUpdateSuccess() {
			// given
			given(syncAccountRepository.findByMemberIdAndIsMain(anyLong(), eq(true)))
				.willReturn(Optional.of(currentMainSyncAccount));
			given(syncAccountRepository.findByUuid(anyString()))
				.willReturn(Optional.of(newMainSyncAccount));
			// when`
			syncAccountService.mainSyncAccountUpdate(memberId, pinVerifyRequest, mainSyncAccountUpdateRequest);
			// then
			assertAll(
				() -> assertFalse(currentMainSyncAccount.getIsMain(), "이전 주계좌가 비활성화 되지 않았습니다."),
				() -> assertTrue(newMainSyncAccount.getIsMain(), "새로운 계좌가 주계좌로 설정되지 않았습니다.")
			);
			verify(syncAccountRepository, times(1)).findByMemberIdAndIsMain(memberId, true);
			verify(syncAccountRepository, times(1)).findByUuid(mainSyncAccountUpdateRequest.uuid());
		}

		@Test
		@DisplayName("회원의 연동 계좌가 없는 경우")
		void memberSyncAccountsEmpty() {
			// given
			given(syncAccountRepository.findByMemberIdAndIsMain(anyLong(), eq(true)))
				.willReturn(Optional.empty());
			given(syncAccountRepository.findByUuid(anyString()))
				.willReturn(Optional.empty());
			// when`& then
			assertThrows(NotFoundException.class, () -> {
				syncAccountService.mainSyncAccountUpdate(memberId, pinVerifyRequest, mainSyncAccountUpdateRequest);
			});
			verify(syncAccountRepository, times(1)).findByMemberIdAndIsMain(memberId, true);
			verify(syncAccountRepository, times(0)).findByUuid(mainSyncAccountUpdateRequest.uuid());
		}

		@Test
		@DisplayName("주계좌 변경을 위한 요청 계좌가 없는 경우")
		void newMainSyncAccountEmpty() {
			// given
			given(syncAccountRepository.findByMemberIdAndIsMain(anyLong(), eq(true)))
				.willReturn(Optional.of(currentMainSyncAccount));
			given(syncAccountRepository.findByUuid(anyString()))
				.willReturn(Optional.empty());
			// when`& then
			assertThrows(BadRequestException.class, () -> {
				syncAccountService.mainSyncAccountUpdate(memberId, pinVerifyRequest, mainSyncAccountUpdateRequest);
			});
			verify(syncAccountRepository, times(1)).findByMemberIdAndIsMain(memberId, true);
			verify(syncAccountRepository, times(1)).findByUuid(mainSyncAccountUpdateRequest.uuid());
		}
	}

}