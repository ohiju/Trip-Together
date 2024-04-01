package com.ssafy.triptogether.chat.service;

import org.springframework.stereotype.Service;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.flashmob.service.FlashMobSaveService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatMessageServiceImpl implements ChatMessageService {

	private final FlashMobSaveService flashMobSaveService;

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

	private void handleJoin(ChatMessage chatMessage) {
		log.info("Join Message: {}", chatMessage.toString());
		//TODO: sendAttendanceRequest API 대체하기
		flashMobSaveService.sendAttendanceRequest(chatMessage.flashmobId(), chatMessage.senderId());
	}

	private void handleAttend(ChatMessage chatMessage) {
		log.info("Attend Message: {}", chatMessage.toString());
		// TODO: applyFlashmob API 대체하기
		// flashMobSaveService.applyFlashmob(chatMessage.flashmobId(), chatMessage.senderId());
	}

	private void handleMessage(ChatMessage chatMessage) {
		log.info("Message Message: {}", chatMessage.toString());
	}

	private void handleSettlement(ChatMessage chatMessage) {
		log.info("Settlement Message: {}", chatMessage.toString());
		// TODO: settlementSave API 대체하기
		// flashMobSaveService.settlementSave(chatMessage.flashmobId(), chatMessage.senderId(), request);
	}

	// TODO: MessageType.Transfer 추가
}
