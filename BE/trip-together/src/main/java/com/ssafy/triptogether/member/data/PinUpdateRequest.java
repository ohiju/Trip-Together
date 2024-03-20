package com.ssafy.triptogether.member.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public record PinUpdateRequest(
        @JsonProperty("pre_pin_num") String prePinNum,
        @JsonProperty("new_pin_num") String newPinNum,
        @JsonProperty("new_pin_num_check") String newPinNumCheck
) {
}
