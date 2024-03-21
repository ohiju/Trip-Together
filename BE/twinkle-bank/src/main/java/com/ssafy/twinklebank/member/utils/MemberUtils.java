package com.ssafy.twinklebank.member.utils;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.ssafy.twinklebank.global.exception.exceptions.WrongPasswordException;
import com.ssafy.twinklebank.global.exception.exceptions.WrongUserNameOrPassWordException;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Slf4j
public class MemberUtils {

	/**
	 * username, password로 사용자를 가져오는 함수
	 *
	 * @param username
	 * @param password
	 * @return 인증된 유저
	 */
	public static Member getMember(MemberRepository memberRepository, PasswordEncoder passwordEncoder, String username,
		String password) {

		Member member = memberRepository.findMemberByUsername(username)
			.orElseThrow(() -> new WrongUserNameOrPassWordException("MemberUtils"));
		if (!passwordEncoder.matches(password, member.getPassword())) {
			throw new WrongPasswordException("MemberUtils");
		}
		return member;
	}

	public static Member getMember(MemberRepository memberRepository, Long id) {
		return memberRepository.findById(id)
			.orElseThrow(() -> new NotFoundException("MemberUtils", UNDEFINED_MEMBER));
	}
}
