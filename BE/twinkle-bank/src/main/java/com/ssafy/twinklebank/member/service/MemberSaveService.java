package com.ssafy.twinklebank.member.service;

import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;

import java.util.Map;

public interface MemberSaveService {
	Map<String, String> join(MemberJoinRequest request);

	void logout(long memberId, String accessToken);
}
