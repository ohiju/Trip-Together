package com.ssafy.triptogether.member.service;

import org.springframework.http.ResponseEntity;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.member.data.ProfileFindResponse;
import com.ssafy.triptogether.member.data.ReissueResponse;

public interface MemberLoadService {
	ProfileFindResponse findProfile(long memberId);

	public ResponseEntity<ApiResponse<ReissueResponse>> reissue(String refreshToken);
}
