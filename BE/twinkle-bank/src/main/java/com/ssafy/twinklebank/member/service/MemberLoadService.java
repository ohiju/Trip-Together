package com.ssafy.twinklebank.member.service;

import java.util.Map;

import com.ssafy.twinklebank.member.data.response.AuthInfoFindResponse;

public interface MemberLoadService {
    AuthInfoFindResponse findAuthInfo(long memberId);
    Map<String, String> reissue(String refreshToken);
}
