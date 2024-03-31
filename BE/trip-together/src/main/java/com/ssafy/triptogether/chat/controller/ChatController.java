package com.ssafy.triptogether.chat.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.chat.data.ChatRoom;
import com.ssafy.triptogether.chat.service.ChatService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ChatController {

	private final ChatService chatService;

	@PostMapping
	public ChatRoom createRoom(@RequestParam("flashmob_id") long flashmobId) {
		return chatService.createChatRoom(flashmobId);
	}
}
