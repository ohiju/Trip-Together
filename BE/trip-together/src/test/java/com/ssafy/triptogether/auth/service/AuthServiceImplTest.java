package com.ssafy.triptogether.auth.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.member.service.MemberServiceImpl;

class AuthServiceImplTest {
	@InjectMocks
	MemberServiceImpl memberService;
	@Mock
	MemberRepository memberRepository;

	@Test
	void pinVerify() {
		// given

		// when

		// then
	}
}