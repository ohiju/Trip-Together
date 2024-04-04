package com.ssafy.triptogether.chat.data;

import java.util.HashSet;
import java.util.Set;

import org.springframework.web.socket.WebSocketSession;

import lombok.Builder;

public record ChatRoom(
	Long flashmobId,
	Set<WebSocketSession> sessions
) {
	@Builder
	public ChatRoom {
		sessions = new HashSet<>();
	}
}
