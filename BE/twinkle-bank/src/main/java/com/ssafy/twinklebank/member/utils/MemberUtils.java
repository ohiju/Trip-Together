package com.ssafy.twinklebank.member.utils;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.twinklebank.global.exception.exceptions.WrongPasswordException;
import com.ssafy.twinklebank.global.exception.exceptions.WrongUserNameOrPassWordException;
import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberUtils {
	private final MemberRepository memberRepository;
	private final PasswordEncoder passwordEncoder;

	/**
	 * username, password로 사용자를 가져오는 함수
	 *
	 * @param username
	 * @param password
	 * @return 인증된 유저
	 */
	public Member getMember(String username, String password) {

		Member member = memberRepository.findMemberByUsername(username)
			.orElseThrow(() -> new WrongUserNameOrPassWordException("MemberUtils"));
		if (!passwordEncoder.matches(password, member.getPassword())) {
			throw new WrongPasswordException("MemberUtils");
		}
		return member;
	}
}
