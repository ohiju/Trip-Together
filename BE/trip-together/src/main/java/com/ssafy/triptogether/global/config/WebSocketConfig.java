package com.ssafy.triptogether.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.ssafy.triptogether.chat.handler.WebSocketHandler;

import lombok.RequiredArgsConstructor;

@EnableWebSocket
@Configuration
@RequiredArgsConstructor
public class WebSocketConfig implements WebSocketConfigurer {

	private final WebSocketHandler webSocketHandler;

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {

		registry.addHandler(webSocketHandler, "/ws/chat")
			.setAllowedOrigins("*");

	}

}