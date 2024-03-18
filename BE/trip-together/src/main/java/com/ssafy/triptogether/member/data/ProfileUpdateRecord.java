package com.ssafy.triptogether.member.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ProfileUpdateRecord(
        @JsonProperty("image_url") String imageUrl,
        String nickname,
        String description
) {
}
