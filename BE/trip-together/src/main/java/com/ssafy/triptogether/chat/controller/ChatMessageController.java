package com.ssafy.triptogether.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.service.ChatMessageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Controller
@Slf4j
public class ChatMessageController {

	private final ChatMessageService chatMessageService;
	private final SimpMessageSendingOperations messageTemplate;

	@MessageMapping("/hello")
	public void hello(@Payload ChatMessage chatMessage) {
		chatMessageService.publish(chatMessage);
		messageTemplate.convertAndSend("/topic/" + chatMessage.flashmobId(), chatMessage);
	}
}
