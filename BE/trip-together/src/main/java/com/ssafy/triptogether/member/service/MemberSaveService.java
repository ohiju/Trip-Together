package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.member.data.ProfileUpdateRecord;

public interface MemberSaveService {
    void updateProfile(long memberId, ProfileUpdateRecord profileUpdateRecord);
}
