package com.ssafy.triptogether.chat.controller;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.service.ChatMessageService;
import com.ssafy.triptogether.global.data.response.ApiResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
public class ChatMessageController {

	private final ChatMessageService chatMessageService;

	@MessageMapping("chat.message")
	public void publish(ChatMessage chatMessage) {
		log.info("publish: " + chatMessage.toString());
		chatMessageService.send(chatMessage);
	}

	@RabbitListener(queues = "${rabbitmq.queue.name}")
	public void subscribe(ChatMessage chatMessage) {
		log.info("subscribe: " + chatMessage.toString());
		chatMessageService.handle(chatMessage);
	}
}
