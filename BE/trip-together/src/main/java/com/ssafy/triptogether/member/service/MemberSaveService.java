package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.member.data.PinSaveRequest;
import com.ssafy.triptogether.member.data.PinUpdateRequest;
import com.ssafy.triptogether.member.data.ProfileUpdateRequest;

public interface MemberSaveService {
    void updateProfile(long memberId, ProfileUpdateRequest profileUpdateRequest);

    void savePin(long memberId, PinSaveRequest pinSaveRequest);

    void updatePin(long memberId, PinUpdateRequest pinUpdateRequest);
}
