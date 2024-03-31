package com.ssafy.triptogether.chat.service;

import java.time.LocalDateTime;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.data.MessageType;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class CustomMessageProducer implements CommandLineRunner {

	private static final String TOPIC_EXCHANGE_NAME = "trip-exchange";
	private final RabbitTemplate rabbitTemplate;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Sending message...");
		rabbitTemplate.convertAndSend(TOPIC_EXCHANGE_NAME, "foo.bar.baz", new ChatMessage(
			1L, 1L, "test", "test", "test", LocalDateTime.now(), MessageType.MESSAGE
		));
	}
}
