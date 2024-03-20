package com.ssafy.twinklebank.member.data;

import java.time.LocalDate;

public record AuthInfoFindResponse(
        String uuid,
        String name,
        String gender,
        LocalDate birth
) {
}
