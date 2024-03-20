package com.ssafy.triptogether.auth.utils;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.member.domain.Gender;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;

@ExtendWith(MockitoExtension.class)
class AuthUtilsTest {
	@InjectMocks
	AuthUtils authUtils;
	@Mock
	MemberRepository memberRepository;

	@Nested
	@DisplayName("PIN 번호 인증")
	class PinVerifyTest {
		Long validMemberId;
		PinVerifyRequest pinVerifyRequest;
		Member member;

		@BeforeEach
		void setUp() {
			validMemberId = 1L;
			pinVerifyRequest = PinVerifyRequest.builder()
				.pinNum("1234")
				.build();
			member = Member.builder()
				.nickname("테스트")
				.uuid("test")
				.birth(LocalDate.now())
				.gender(Gender.MALE)
				.build();
		}

		@Test
		@DisplayName("회원이 존재하지 않을 때 NotFoundException 발생")
		void pinVerifyMemberNotFound() {
			// given
			given(memberRepository.findById(1L)).willReturn(Optional.empty());

			// when & then
			assertThrows(NotFoundException.class, () -> {
				authUtils.pinVerify(validMemberId, pinVerifyRequest);
			});
		}

		@Test
		@DisplayName("성공적으로 PIN 번호 인증")
		void pinVerifySuccess() {
			// given

			// when

			// then
		}

		@Test
		@DisplayName("PIN 번호가 불일치 할 경우 UnAuthorizedException 발생")
		void pinVerifyFail() {
			// given

			// when

			// then
		}
	}

}