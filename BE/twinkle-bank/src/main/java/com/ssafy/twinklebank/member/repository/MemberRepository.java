package com.ssafy.twinklebank.member.repository;

import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.member.repository.query.MemberRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long>, MemberRepositoryCustom {
	Optional<Member> findMemberByUsername(String username);
}
