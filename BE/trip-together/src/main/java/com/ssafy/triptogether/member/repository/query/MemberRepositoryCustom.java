package com.ssafy.triptogether.member.repository.query;

import java.util.Optional;

import com.ssafy.triptogether.member.data.response.ProfileFindResponse;

public interface MemberRepositoryCustom {
	Optional<ProfileFindResponse> findProfileByMemberId(long memberId);
}
