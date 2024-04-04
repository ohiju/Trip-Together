package com.ssafy.triptogether.flashmob.data.request;

import com.ssafy.triptogether.member.domain.RoomStatus;

import jakarta.validation.constraints.NotNull;

public record ApplyFlashmobRequest(
	@NotNull
	RoomStatus status
) {
}
