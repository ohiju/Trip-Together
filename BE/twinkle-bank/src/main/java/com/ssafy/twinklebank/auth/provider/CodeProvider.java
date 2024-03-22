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
		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < genSize; i++) {
			int index = secureRandom.nextInt(CHARS.length());
			sb.append(CHARS.charAt(index));
		}

		if (sb.toString().length() != genSize) {
			throw new NotFoundException("CodeProvider : ", CODE_NOT_FOUND);
		}

		return sb.toString();
	}

}
