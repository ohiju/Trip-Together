package com.ssafy.twinklebank.application.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.twinklebank.application.domain.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
	Optional<Application> findByClientId(String clientId);

	Optional<Application> findById(long applicationId);
}
