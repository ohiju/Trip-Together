package com.ssafy.twinklebank.member.repository;

import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.member.repository.query.MemberRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long>, MemberRepositoryCustom {
}
