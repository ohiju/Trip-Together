package com.ssafy.triptogether.flashmob.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record RequestMemberResponse(
    @JsonProperty("member_id") Long memberId,
    @JsonProperty("image_url") String memberProfileImageUrl,
    String nickname,
    @JsonProperty("is_accepted") Boolean isAccepted
) {
}
