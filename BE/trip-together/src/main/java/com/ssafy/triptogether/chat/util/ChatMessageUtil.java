package com.ssafy.triptogether.chat.util;

import static com.ssafy.triptogether.chat.data.MessageType.*;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.service.ChatMessageService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class ChatMessageUtil {

	private final ChatMessageService chatMessageService;
	public void sendAttendMsg(long flashmobId, long memberId, String memberNickname, String memberImgUrl) {
		ChatMessage chatMessage = ChatMessage.builder()
			.flashmobId(flashmobId)
			.senderId(memberId)
			.senderNickname(memberNickname)
			.senderImageUrl(memberImgUrl)
			.content(memberNickname + " 님이 참가를 희망합니다.")
			.createdAt(LocalDateTime.now())
			.status(ATTEND)
			.build();
		chatMessageService.send(chatMessage);
	}

	public void sendJoinMsg(long flashmobId, long memberId, String memberNickname, String memberImgUrl) {
		ChatMessage chatMessage = ChatMessage.builder()
			.flashmobId(flashmobId)
			.senderId(memberId)
			.senderNickname(memberNickname)
			.senderImageUrl(memberImgUrl)
			.content(memberNickname + " 님이 참가 하였습니다.")
			.createdAt(LocalDateTime.now())
			.status(JOIN)
			.build();
		chatMessageService.send(chatMessage);
	}

	public void sendSettlementMsg(long flashmobId, long memberId, String memberNickname, String memberImgUrl, String content) {
		ChatMessage chatMessage = ChatMessage.builder()
			.flashmobId(flashmobId)
			.senderId(memberId)
			.senderNickname(memberNickname)
			.senderImageUrl(memberImgUrl)
			.content(content) // TODO: 정산 요청의 경우 어떤 내용물을 보내줄 지 결정
			.createdAt(LocalDateTime.now())
			.status(SETTLEMENT)
			.build();
		chatMessageService.send(chatMessage);
	}
}
