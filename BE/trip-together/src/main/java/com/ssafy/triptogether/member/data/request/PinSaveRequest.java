package com.ssafy.triptogether.member.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record PinSaveRequest(
    @NotBlank(message = "등록할 핀번호를 입력해주세요.")
    @Pattern(regexp = "[0-9]{6}", message = "핀번호는 숫자 6자리입니다.")
    @JsonProperty("pin_num")
    String pinNum,
    @NotBlank(message = "등록할 핀번호를 입력해주세요.")
    @JsonProperty("pin_num_check")
    String pinNumCheck
) {
}
