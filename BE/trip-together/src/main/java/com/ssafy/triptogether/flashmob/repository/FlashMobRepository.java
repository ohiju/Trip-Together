package com.ssafy.triptogether.flashmob.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.flashmob.domain.FlashMob;
import com.ssafy.triptogether.flashmob.repository.query.FlashMobRepositoryCustom;

public interface FlashMobRepository extends JpaRepository<FlashMob, Long>, FlashMobRepositoryCustom {
}
