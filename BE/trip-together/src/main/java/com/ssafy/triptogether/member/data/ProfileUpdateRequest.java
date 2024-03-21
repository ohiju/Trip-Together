package com.ssafy.triptogether.member.data;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public record ProfileUpdateRequest(
        @JsonProperty("image_url") String imageUrl,
        @NotNull String nickname,
        String description
) {
}
