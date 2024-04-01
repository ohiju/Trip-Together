package com.ssafy.triptogether.chat.service;

import com.ssafy.triptogether.chat.data.ChatMessage;

public interface ChatMessageService {
	void handle(ChatMessage chatMessage);
}
