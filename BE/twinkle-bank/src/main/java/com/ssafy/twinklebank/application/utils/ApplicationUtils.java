package com.ssafy.twinklebank.application.utils;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

import org.springframework.stereotype.Service;

import com.ssafy.twinklebank.application.domain.Application;
import com.ssafy.twinklebank.application.repository.ApplicationRepository;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.global.exception.response.ErrorCode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ApplicationUtils {
	private final ApplicationRepository applicationRepository;

	public Application getApplication(String clientId) {
		return applicationRepository.findByClientId(clientId)
			.orElseThrow(() -> new NotFoundException("ApplicationUtils : ", APPLICATION_NOT_FOUND));
	}
}