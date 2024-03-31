package com.ssafy.triptogether.chat.service;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.data.ChatRoom;
import com.ssafy.triptogether.chat.data.MessageType;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChatService {

	private final ObjectMapper objectMapper;
	private Map<Long, ChatRoom> chatRooms;

	@PostConstruct
	public void init() {
		chatRooms = new LinkedHashMap<>();
	}

	public ChatRoom createChatRoom(long flashmobId) {
		// create chat room
		ChatRoom chatRoom = ChatRoom.builder().flashmobId(flashmobId).build();

		// add to map
		chatRooms.put(chatRoom.flashmobId(), chatRoom);
		return chatRoom;
	}

	public ChatRoom findChatRoom(long flashmobId) {
		// find chat room
		return chatRooms.get(flashmobId);
	}

	public void sendToAllMessage(ChatRoom chatRoom, ChatMessage sendingMsg) {
		// send message to all sessions
		chatRoom.sessions().forEach(session -> sendMessage(session, sendingMsg));
	}

	private <T> void sendMessage(WebSocketSession session, T message) {
		try {
			session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
		} catch (IOException e) {
			throw new IllegalArgumentException("메시지 전송 실패"); //TODO: 커스텀 예외 처리
		}
	}

	public void handle(ChatRoom chatRoom, ChatMessage receivedMsg, WebSocketSession session) {
		switch (receivedMsg.status()) {
			case JOIN -> handleJoin(chatRoom, receivedMsg, session);
			case ATTEND -> handleAttend(chatRoom, receivedMsg, session);
			case SETTLEMENT -> handleSettlement(chatRoom, receivedMsg, session);
			case MESSAGE -> handleMessage(chatRoom, receivedMsg, session);
		}
	}

	private void handleJoin(ChatRoom chatRoom, ChatMessage receivedMsg, WebSocketSession session) {
		//
		ChatMessage sendingMsg = ChatMessage.builder()
			.flashmobId(receivedMsg.flashmobId())
			.senderId(receivedMsg.senderId())
			.senderNickname(receivedMsg.senderNickname())
			.senderImageUrl(receivedMsg.senderImageUrl())
			.content(receivedMsg.content())
			.createdAt(receivedMsg.createdAt())
			.status(MessageType.JOIN)
			.build();

		//
		sendToAllMessage(chatRoom, sendingMsg);
	}

	private void handleAttend(ChatRoom chatRoom, ChatMessage receivedMsg, WebSocketSession session) {
		//
		chatRoom.sessions().add(session);

		//
		ChatMessage sendingMsg = ChatMessage.builder()
			.flashmobId(receivedMsg.flashmobId())
			.senderId(receivedMsg.senderId())
			.senderNickname(receivedMsg.senderNickname())
			.senderImageUrl(receivedMsg.senderImageUrl())
			.content(receivedMsg.content())
			.createdAt(receivedMsg.createdAt())
			.status(MessageType.ATTEND)
			.build();

		//
		sendToAllMessage(chatRoom, sendingMsg);
	}

	private void handleSettlement(ChatRoom chatRoom, ChatMessage receivedMsg, WebSocketSession session) {
		//
	}

	private void handleMessage(ChatRoom chatRoom, ChatMessage receivedMsg, WebSocketSession session) {
		//
		ChatMessage sendingMsg = ChatMessage.builder()
			.flashmobId(receivedMsg.flashmobId())
			.senderId(receivedMsg.senderId())
			.senderNickname(receivedMsg.senderNickname())
			.senderImageUrl(receivedMsg.senderImageUrl())
			.content(receivedMsg.content())
			.createdAt(receivedMsg.createdAt())
			.status(MessageType.MESSAGE)
			.build();

		//
		sendToAllMessage(chatRoom, sendingMsg);
	}
}