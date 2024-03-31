package com.ssafy.triptogether.chat.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.data.ChatRoom;
import com.ssafy.triptogether.chat.service.ChatService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class WebSocketHandler extends TextWebSocketHandler {

	private final ChatService chatService;
	private final ObjectMapper objectMapper;
	private Long flashmobId;
	private ChatRoom chatRoom;

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		//
		String payload = message.getPayload();
		ChatMessage chatMessage = objectMapper.readValue(payload, ChatMessage.class);

		// get flashmob id
		flashmobId = chatMessage.flashmobId();

		// find chat room
		chatRoom = chatService.findChatRoom(flashmobId);

		// send messages
		chatService.handle(chatRoom, chatMessage, session);
	}

}