package com.ssafy.triptogether.member.data;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public record PinSaveRequest(
        @NotNull @JsonProperty("pin_num") String pinNum,
        @NotNull @JsonProperty("pin_num_check") String pinNumCheck
) {
}
