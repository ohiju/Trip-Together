package com.ssafy.triptogether.auth.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record MemberInfo(
	@NotNull @JsonProperty("member_id")
	Long memberId,
	@NotNull @JsonProperty("username")
	String username,
	@JsonProperty("nickname")
	String nickname,
	@JsonProperty("image_url")
	String imageUrl,
	@JsonProperty("description")
	String description,
	@NotNull @JsonProperty("is_pin")
	Boolean isPin
) {
	public MemberInfo{
		if (nickname == null){
			nickname = "";
		}
		if (imageUrl == null){
			imageUrl = "";
		}
		if (description == null){
			description = "";
		}
	}
}
