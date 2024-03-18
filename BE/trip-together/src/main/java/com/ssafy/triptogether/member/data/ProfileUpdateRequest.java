package com.ssafy.triptogether.member.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ProfileUpdateRequest(
        @JsonProperty("image_url") String imageUrl,
        String nickname,
        String description
) {
}
