package com.ssafy.triptogether.attraction.data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public record FlashmobUpdateRequest(
        String title,
        @JsonProperty("start_time") LocalDateTime startAt,
        @JsonProperty("max_users") Integer maxMemberCount
) {
}
