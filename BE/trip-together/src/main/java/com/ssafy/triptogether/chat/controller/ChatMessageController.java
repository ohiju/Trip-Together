package com.ssafy.triptogether.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.service.ChatMessageService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class ChatMessageController {

	private final ChatMessageService chatMessageService;
	private final SimpMessageSendingOperations messageTemplate;

	//TODO: 메시지 큐를 채팅에 참여중인 사용자에게 각각 할당하고, 불러와서 관리하기

	@MessageMapping
	public void publish(@Payload ChatMessage chatMessage) {
		chatMessageService.publish(chatMessage);
		chatMessageService.handle(chatMessage);
		messageTemplate.convertAndSend("/topic/" + chatMessage.flashmobId(), chatMessage);
	}
}
