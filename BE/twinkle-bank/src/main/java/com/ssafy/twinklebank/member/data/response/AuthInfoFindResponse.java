package com.ssafy.twinklebank.member.data.response;

import com.ssafy.twinklebank.member.domain.GenderType;

import java.time.LocalDate;

public record AuthInfoFindResponse(
        String uuid,
        String name,
        GenderType gender,
        LocalDate birth
) {
}
