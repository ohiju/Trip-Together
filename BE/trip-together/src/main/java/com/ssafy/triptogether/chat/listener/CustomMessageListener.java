package com.ssafy.triptogether.chat.listener;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import com.ssafy.triptogether.chat.data.ChatMessage;

@Service
public class CustomMessageListener {

	@RabbitListener(queues = "trip")
	public void receiveMessage(final ChatMessage chatMessage) {
		System.out.println(chatMessage);
	}
}
