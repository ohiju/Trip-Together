package com.ssafy.twinklebank.member.service;

import com.ssafy.twinklebank.member.data.response.AuthInfoFindResponse;

public interface MemberLoadService {
    AuthInfoFindResponse findAuthInfo(String memberUuid);
}
