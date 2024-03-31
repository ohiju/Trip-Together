package com.ssafy.triptogether.chat.controller;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.triptogether.chat.data.ChatMessage;
import com.ssafy.triptogether.chat.service.ChatMessageService;
import com.ssafy.triptogether.global.data.response.ApiResponse;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class ChatMessageController {

	private final ChatMessageService chatMessageService;

	@PostMapping("/send/message")
	public ResponseEntity<ApiResponse<Void>> publish(@RequestBody ChatMessage chatMessage) {
		chatMessageService.publish(chatMessage);
		return ApiResponse.emptyResponse(OK, SUCCESS_SEND_CHAT);
	}
}
