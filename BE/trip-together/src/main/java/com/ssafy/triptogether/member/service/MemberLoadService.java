package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.member.data.ProfileFindResponse;
import com.ssafy.triptogether.member.data.ReissueResponse;
import org.springframework.http.ResponseEntity;

public interface MemberLoadService {
    ProfileFindResponse findProfile(long memberId);

    public ResponseEntity<ApiResponse<ReissueResponse>> reissue(String refreshToken);
}
