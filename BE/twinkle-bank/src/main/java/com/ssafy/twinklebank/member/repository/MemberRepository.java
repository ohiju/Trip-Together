package com.ssafy.twinklebank.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.twinklebank.member.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
