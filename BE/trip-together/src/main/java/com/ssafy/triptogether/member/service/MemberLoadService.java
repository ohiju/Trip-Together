package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.member.data.ProfileFindResponse;

public interface MemberLoadService {
    ProfileFindResponse findProfile(long memberId);
}
