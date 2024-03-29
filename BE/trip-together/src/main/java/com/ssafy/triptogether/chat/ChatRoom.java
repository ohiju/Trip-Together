package com.ssafy.triptogether.chat;

import java.util.HashSet;
import java.util.Set;

import org.springframework.web.socket.WebSocketSession;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ChatRoom {
	private String roomId;
	private String name;
	// 세션은 클라이언트가 WebSocket으로 연결시 얻어올 수 있다.
	private Set<WebSocketSession> sessions = new HashSet<>();

	@Builder
	public ChatRoom(String roomId, String name) {
		this.roomId = roomId;
		this.name = name;
	}

}
