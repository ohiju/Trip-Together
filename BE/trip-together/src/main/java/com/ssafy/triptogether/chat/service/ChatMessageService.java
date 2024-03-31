package com.ssafy.triptogether.chat.service;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ssafy.triptogether.chat.data.ChatMessage;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatMessageService {

	private final RabbitTemplate rabbitTemplate;
	@Value("${rabbitmq.exchange.name}")
	private String exchangeName;
	@Value("${rabbitmq.routing.key}")
	private String routingKey;

	/**
	 * Queue로 메시지를 발행
	 *
	 * @param chatMessage 발행할 메시지의 DTO 객체
	 */
	public void publish(ChatMessage chatMessage) {
		log.info("message sent: {}", chatMessage.toString());
		rabbitTemplate.convertAndSend(exchangeName, routingKey, chatMessage);
	}

	/**
	 * Queue에서 메시지를 구독
	 *
	 * @param chatMessage 구독한 메시지를 담고 있는 MessageDto 객체
	 */
	@RabbitListener(queues = "${rabbitmq.queue.name}")
	public void subscribe(ChatMessage chatMessage) {
		log.info("Received message: {}", chatMessage.toString());
		rabbitTemplate.convertAndSend(exchangeName, routingKey, chatMessage);
	}
}
