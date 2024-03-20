package com.ssafy.twinklebank.member.repository.query;

import com.ssafy.twinklebank.member.data.AuthInfoFindResponse;

import java.util.Optional;

public interface MemberRepositoryCustom {
    Optional<AuthInfoFindResponse> findAuthInfoById(String memberUuid);
}
