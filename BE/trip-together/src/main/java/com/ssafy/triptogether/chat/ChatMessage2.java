package com.ssafy.triptogether.chat;

import lombok.Getter;

@Getter
public class ChatMessage2 {

	public enum MessageType {
		ENTER, TALK
	}

	private MessageType type;
	private String roomId;
	private String sender;
	private String message;
}
