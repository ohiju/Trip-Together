package com.ssafy.triptogether.chat.controller;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.service.ChatMessageService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class ChatMessageController {

	private final RabbitTemplate rabbitTemplate;
	private final ChatMessageService chatMessageService;
	@Value("${rabbitmq.exchange.name}")
	private String exchangeName;

	@MessageMapping("chat.message.{flashmob_id}")
	public void publish(ChatMessage chatMessage, @DestinationVariable("flashmob_id") long flashmobId) {
		rabbitTemplate.convertAndSend(exchangeName, "room." + flashmobId, chatMessage);
	}

	@RabbitListener(queues = "${rabbitmq.queue.name}")
	public void subscribe(ChatMessage chatMessage) {
		chatMessageService.handle(chatMessage);
	}
}
