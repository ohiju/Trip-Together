package com.ssafy.triptogether.member.repository;

import com.ssafy.triptogether.member.domain.MemberFlashMob;
import com.ssafy.triptogether.member.repository.query.MemberFlashmobRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberFlashMobRepository extends JpaRepository<MemberFlashMob, Long>, MemberFlashmobRepositoryCustom {
	long countMemberFlashMobsByFlashMob_Id(long flashmobId);
}
