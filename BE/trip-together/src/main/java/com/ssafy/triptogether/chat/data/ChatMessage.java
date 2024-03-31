package com.ssafy.triptogether.chat.data;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ChatMessage(
	@JsonProperty("flashmob_id") Long flashmobId,
	@JsonProperty("sender_id") Long senderId,
	@JsonProperty("sender_nickname") String senderNickname,
	@JsonProperty("sender_image_url") String senderImageUrl,
	String content,
	@JsonProperty("created_at") LocalDateTime createdAt,
	MessageType status
) {
}
