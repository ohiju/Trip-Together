package com.ssafy.triptogether.flashmob.data.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record SettlementsLoadResponse(
	@JsonProperty("requester_settlements")
	List<RequesterSettlementsLoadDetail> requesterSettlementsLoadDetails,
	@JsonProperty("participant_settlements")
	List<ParticipantSettlementsLoadDetail> participantSettlementsLoadDetails
) {
}
