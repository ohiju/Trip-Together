package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.member.data.ProfileUpdateRequest;
import com.ssafy.triptogether.member.repository.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
class MemberServiceImplTest {

    @InjectMocks
    MemberServiceImpl memberService;
    @Mock
    MemberRepository memberRepository;

    @Test
    @DisplayName("[UpdateProfile][Error] undefined member")
    void profileUpdateNotFoundException() {
        // given
        long undefinedId = 1L;
        ProfileUpdateRequest request = new ProfileUpdateRequest(
                "/S3/profile/1", "멍멍이", "자유로운 영혼"
        );

        // when & then
        RuntimeException exception = assertThrows(
                RuntimeException.class, () -> memberService.updateProfile(undefinedId, request)
        );
    }
}