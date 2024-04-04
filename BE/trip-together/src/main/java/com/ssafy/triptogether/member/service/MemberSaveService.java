package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleMemberInfoResponse;
import com.ssafy.triptogether.member.data.request.PinSaveRequest;
import com.ssafy.triptogether.member.data.request.PinUpdateRequest;
import com.ssafy.triptogether.member.data.request.ProfileUpdateRequest;
import com.ssafy.triptogether.member.data.response.ProfileUpdateResponse;
import com.ssafy.triptogether.member.domain.Member;

public interface MemberSaveService {
	void reportMember(long memberId);

	ProfileUpdateResponse updateProfile(long memberId, ProfileUpdateRequest profileUpdateRequest);

	void savePin(long memberId, PinSaveRequest pinSaveRequest);

	void updatePin(long memberId, PinVerifyRequest pinVerifyRequest, PinUpdateRequest pinUpdateRequest);

	void logout(SecurityMember securityMember, String accessToken);

	Member saveMember(TwinkleMemberInfoResponse twinkleMemberInfoResponse);
}
