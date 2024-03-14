package com.ssafy.triptogether.member.repository;

import com.ssafy.triptogether.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
