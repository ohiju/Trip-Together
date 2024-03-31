package com.ssafy.triptogether.flashmob.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.flashmob.domain.MemberFlashMob;
import com.ssafy.triptogether.member.repository.query.MemberFlashmobRepositoryCustom;

public interface MemberFlashMobRepository extends JpaRepository<MemberFlashMob, Long>, MemberFlashmobRepositoryCustom {
	long countMemberFlashMobsByFlashMob_Id(long flashmobId);
}
