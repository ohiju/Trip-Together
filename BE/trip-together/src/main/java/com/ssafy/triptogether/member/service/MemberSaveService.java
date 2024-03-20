package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.member.data.ProfileUpdateRequest;

public interface MemberSaveService {
    void updateProfile(long memberId, ProfileUpdateRequest profileUpdateRequest);
}
