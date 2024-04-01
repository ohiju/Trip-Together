package com.ssafy.triptogether.chat.service;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.flashmob.service.FlashMobSaveService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatMessageServiceImpl implements ChatMessageService {

	private final RabbitTemplate rabbitTemplate;

	@Value("${rabbitmq.exchange.name}")
	private String exchangeName;

	@Override
	public void handle(ChatMessage chatMessage) {
		switch (chatMessage.status()) {
			case JOIN -> handleJoin(chatMessage);
			case ATTEND -> handleAttend(chatMessage);
			case MESSAGE -> handleMessage(chatMessage);
			case SETTLEMENT -> handleSettlement(chatMessage);
			default -> throw new IllegalArgumentException("잘못된 메시지 형식입니다."); //TODO: 커스텀 예외처리
		}
	}

	@Override
	public void send(ChatMessage chatMessage) {
		rabbitTemplate.convertAndSend(exchangeName, "room." + chatMessage.flashmobId(), chatMessage);
	}

	private void handleJoin(ChatMessage chatMessage) {
		log.info("Join Message: {}", chatMessage.toString());
	}

	private void handleAttend(ChatMessage chatMessage) {
		log.info("Attend Message: {}", chatMessage.toString());
	}

	private void handleMessage(ChatMessage chatMessage) {
		log.info("Message Message: {}", chatMessage.toString());
	}

	private void handleSettlement(ChatMessage chatMessage) {
		log.info("Settlement Message: {}", chatMessage.toString());
	}

}
