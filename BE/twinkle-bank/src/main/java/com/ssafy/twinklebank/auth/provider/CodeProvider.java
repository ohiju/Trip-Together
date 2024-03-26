package com.ssafy.twinklebank.auth.provider;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

import java.security.SecureRandom;

import org.springframework.stereotype.Component;

import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class CodeProvider {
	private final static String CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	public String generateRandom(int genSize) {
		SecureRandom secureRandom = new SecureRandom();
		StringBuilder code = new StringBuilder();

		for (int i = 0; i < genSize; i++) {
			int index = secureRandom.nextInt(CHARS.length());
			code.append(CHARS.charAt(index));
		}

		if (code.toString().length() != genSize) {
			throw new NotFoundException("CodeProvider : ", CODE_NOT_FOUND);
		}

		return code.toString();
	}

	public String generateKoreanCode(int length) {
		SecureRandom secureRandom = new SecureRandom();
		StringBuilder code = new StringBuilder();

		for (int i = 0; i < length; i++) {
			int randomValue = secureRandom.nextInt(0xD7A3 - 0xAC00 + 1) + 0xAC00; // 한글 범위 내 랜덤 값 생성
			code.append((char)randomValue); // 생성된 값을 문자로 변환하여 추가
		}

		if (code.toString().length() != length) {
			throw new NotFoundException("CodeProvider : ", CODE_NOT_FOUND);
		}
		return code.toString();
	}

}
