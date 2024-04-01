package com.ssafy.triptogether.member.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record PinUpdateRequest(
    @NotBlank(message = "기존의 핀번호를 입력해주세요.")
    @JsonProperty("pre_pin_num")
    String prePinNum,
    @NotBlank(message = "변경할 핀번호를 입력해주세요.")
    @Pattern(regexp = "[0-9]{6}", message = "핀번호는 숫자 6자리입니다.")
    @JsonProperty("new_pin_num")
    String newPinNum,
    @NotBlank(message = "변경할 핀번호를 입력해주세요.")
    @JsonProperty("new_pin_num_check")
    String newPinNumCheck
) {
}
