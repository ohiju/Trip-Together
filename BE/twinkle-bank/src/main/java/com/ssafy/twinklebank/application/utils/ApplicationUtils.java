package com.ssafy.twinklebank.application.utils;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.*;

import com.ssafy.twinklebank.application.domain.Application;
import com.ssafy.twinklebank.application.repository.ApplicationRepository;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Slf4j
public class ApplicationUtils {

	public static Application getApplication(ApplicationRepository applicationRepository, String clientId) {
		return applicationRepository.findByClientId(clientId)
			.orElseThrow(() -> new NotFoundException("ApplicationUtils : ", APPLICATION_NOT_FOUND));
	}
}
