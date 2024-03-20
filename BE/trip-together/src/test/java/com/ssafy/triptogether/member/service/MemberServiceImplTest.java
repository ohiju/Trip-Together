package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.exceptions.category.ValidationException;
import com.ssafy.triptogether.member.data.PinSaveRequest;
import com.ssafy.triptogether.member.data.PinUpdateRequest;
import com.ssafy.triptogether.member.data.ProfileUpdateRequest;
import com.ssafy.triptogether.member.repository.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.PIN_CHECK_MISS_MATCH;
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

    @Test
    @DisplayName("[SavePin][Error] pin check miss match")
    void savePinCheckValidationException() {
        // given
        long memberId = 1L;
        PinSaveRequest request = new PinSaveRequest("123-456", "123-457");

        // when
        ValidationException exception
                = assertThrows(ValidationException.class, () -> memberService.savePin(memberId, request));

        // then
        assertThat(exception.getMessageKey()).isEqualTo("error.InValid.PinSave");
        assertThat(exception.getErrorCode()).isEqualTo(PIN_CHECK_MISS_MATCH);
        assertThat(exception.getParams()).contains(request.pinNum(), request.pinNumCheck());
    }

    @Test
    @DisplayName("[SavePin][Error] undefined member")
    void memberNotFoundException() {
        // given
        long undefinedId = 1L;
        PinSaveRequest request = new PinSaveRequest("123-456", "123-456");

        // when
        NotFoundException exception
                = assertThrows(NotFoundException.class, () -> memberService.savePin(undefinedId, request));

        // then
        assertThat(exception.getMessageKey()).isEqualTo("error.NotFound.PinSave");
        assertThat(exception.getErrorCode()).isEqualTo(UNDEFINED_MEMBER);
        assertThat(exception.getParams()).contains(undefinedId);
    }

    @Test
    @DisplayName("[UpdatePin][Error] pin check miss match")
    void updatePinCheckValidationException() {
        // given
        long memberId = 1L;
        PinUpdateRequest request = new PinUpdateRequest("123-456", "123-455", "123-454");

        // when
        ValidationException exception
                = assertThrows(ValidationException.class, () -> memberService.updatePin(memberId, request));

        // then
        assertThat(exception.getMessageKey()).isEqualTo("error.InValid.PinUpdate");
        assertThat(exception.getErrorCode()).isEqualTo(PIN_CHECK_MISS_MATCH);
        assertThat(exception.getParams()).contains(request.newPinNum(), request.newPinNumCheck());
    }

    @Test
    @DisplayName("[UpdatePin][Error] undefined member")
    void pinUpdateMemberNotFoundException() {
        // given
        long undefinedId = 1L;
        PinUpdateRequest request = new PinUpdateRequest("123-456", "123-455", "123-455");

        // when
        NotFoundException exception
                = assertThrows(NotFoundException.class, () -> memberService.updatePin(undefinedId, request));

        // then
        assertThat(exception.getMessageKey()).isEqualTo("error.NotFound.PinUpdate");
        assertThat(exception.getErrorCode()).isEqualTo(UNDEFINED_MEMBER);
        assertThat(exception.getParams()).contains(undefinedId);
    }
}