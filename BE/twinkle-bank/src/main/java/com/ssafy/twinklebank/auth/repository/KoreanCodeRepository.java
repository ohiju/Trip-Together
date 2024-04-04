package com.ssafy.twinklebank.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.twinklebank.auth.domain.KoreanCode;
@Repository
public interface KoreanCodeRepository extends JpaRepository<KoreanCode, Long> {
}
