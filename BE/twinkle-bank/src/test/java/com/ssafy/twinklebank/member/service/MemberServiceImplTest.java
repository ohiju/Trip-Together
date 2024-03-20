package com.ssafy.twinklebank.member.service;

import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.member.repository.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static com.ssafy.twinklebank.global.exception.response.ErrorCode.UNDEFINED_MEMBER;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
class MemberServiceImplTest {

    @InjectMocks
    MemberServiceImpl memberService;
    @Mock
    MemberRepository memberRepository;

    @Test
    @DisplayName("[FindAuthInfo][Error] undefined member")
    void authInfoNotFoundException() {
        // given
        long undefinedId = 1L;

        // when
        NotFoundException exception
                = assertThrows(NotFoundException.class, () -> memberService.findAuthInfo(undefinedId));

        // then
        assertThat(exception.getMessageKey()).isEqualTo("error.NotFound.AuthInfoFind");
        assertThat(exception.getErrorCode()).isEqualTo(UNDEFINED_MEMBER);
        assertThat(exception.getParams()).contains(undefinedId);
    }
}