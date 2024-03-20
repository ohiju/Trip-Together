package com.ssafy.twinklebank.application.utils;

import org.springframework.stereotype.Service;

import com.ssafy.twinklebank.application.domain.Application;
import com.ssafy.twinklebank.application.repository.ApplicationRepository;
import com.ssafy.twinklebank.global.exception.exceptions.ApplicationNotFoundException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ApplicationUtils {
	private final ApplicationRepository applicationRepository;

	public Application getApplication(String clientId) {
		Application application = applicationRepository.findByClientId(clientId)
			.orElseThrow(() -> new ApplicationNotFoundException("ApplicationUtils"));
		return application;
	}
}
