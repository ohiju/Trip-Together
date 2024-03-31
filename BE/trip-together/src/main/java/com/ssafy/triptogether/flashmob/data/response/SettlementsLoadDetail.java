package com.ssafy.triptogether.flashmob.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record SettlementsLoadDetail(
	@JsonProperty("settlement_id")
	Long settlementId,
	@JsonProperty("total_price")
	Double totalPrice,
	@JsonProperty("is_done")
	Boolean isDone,
	@JsonProperty("receiver_id")
	Long receiverId,
	@JsonProperty("receiver_nickname")
	String receiverNickname,
	@JsonProperty("receiver_image_url")
	String receiverImageUrl,
	@JsonProperty("is_receiver")
	Boolean isReceiver
) {
}
