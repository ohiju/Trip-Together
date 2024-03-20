package com.ssafy.triptogether.member.data;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;

public record PinSaveRequest(
        @NotBlank
        @JsonProperty("pin_num")
        String pinNum,
        @NotBlank
        @JsonProperty("pin_num_check")
        String pinNumCheck
) {
}
