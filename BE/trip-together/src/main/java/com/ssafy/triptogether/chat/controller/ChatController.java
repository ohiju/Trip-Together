package com.ssafy.triptogether.chat.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.chat.ChatRoom;
import com.ssafy.triptogether.chat.service.ChatService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("chat-rooms")
public class ChatController {

	private final ChatService chatService;

	//RoomName으로 채팅방 생성
	@PostMapping
	public ChatRoom createRoom(@RequestParam("RoomName") String RoomName) {
		return chatService.createChatRoom(RoomName);
	}

}
