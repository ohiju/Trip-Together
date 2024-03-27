package com.ssafy.triptogether.infra.twinklebank.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record TwinkleBankLogoutRequest(
    @NotBlank(message = "유효하지 않은 은행 사용자입니다.")
    @JsonProperty("member_uuid")
    String memberUuid
) {
}
