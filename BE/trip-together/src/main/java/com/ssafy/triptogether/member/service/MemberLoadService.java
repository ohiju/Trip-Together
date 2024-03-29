package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.member.data.response.ProfileFindResponse;
import com.ssafy.triptogether.member.data.response.ReissueResponse;
import org.springframework.http.ResponseEntity;

public interface MemberLoadService {
    ProfileFindResponse findProfile(long memberId);

    public ResponseEntity<ApiResponse<ReissueResponse>> reissue(String refreshToken);
}
