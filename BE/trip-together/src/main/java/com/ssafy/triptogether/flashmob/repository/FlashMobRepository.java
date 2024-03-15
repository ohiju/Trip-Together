package com.ssafy.triptogether.flashmob.repository;

import com.ssafy.triptogether.flashmob.domain.FlashMob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlashMobRepository extends JpaRepository<FlashMob, Long> {
}
