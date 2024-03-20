package com.ssafy.twinklebank.member.service;

import java.util.Map;

import com.ssafy.twinklebank.member.data.request.MemberJoinRequest;

public interface MemberSaveService {
	Map<String, String> join(MemberJoinRequest request);
}
