package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.member.data.ProfileFindResponse;
import com.ssafy.triptogether.member.data.ProfileUpdateRequest;
import com.ssafy.triptogether.member.repository.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.UNDEFINED_MEMBER;
import static org.assertj.core.api.Assertions.assertThat;
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
        ProfileUpdateRequest request
                = new ProfileUpdateRequest("/S3/profile/1", "멍멍이", "자유로운 영혼");

        // when
        NotFoundException exception
                = assertThrows(NotFoundException.class, () -> memberService.updateProfile(undefinedId, request));

        // then
        assertThat(exception.getMessageKey()).isEqualTo("error.NotFound.ProfileUpdate");
        assertThat(exception.getErrorCode()).isEqualTo(UNDEFINED_MEMBER);
        assertThat(exception.getParams()).contains(undefinedId);
    }

    @Test
    @DisplayName("[FindProfile][Error] undefined member")
    void profileFindNotFoundException() {
        // given
        long undefinedId = 1L;

        // when
        NotFoundException exception
                = assertThrows(NotFoundException.class, () -> memberService.findProfile(undefinedId));

        // then
        assertThat(exception.getMessageKey()).isEqualTo("error.NotFound.ProfileFind");
        assertThat(exception.getErrorCode()).isEqualTo(UNDEFINED_MEMBER);
        assertThat(exception.getParams()).contains(undefinedId);
    }
}