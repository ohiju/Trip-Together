package com.ssafy.triptogether.global.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@EnableWebSocketMessageBroker
@Configuration
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

	@Value("${spring.rabbitmq.host}")
	private String rabbitmqHost;

	@Value("${spring.rabbitmq.username}")
	private String rabbitmqUsername;

	@Value("${spring.rabbitmq.password}")
	private String rabbitmqPassword;

	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		registry.addEndpoint("/ws").setAllowedOrigins("*");
	}

	@Override
	public void configureMessageBroker(MessageBrokerRegistry registry) {
		registry.setApplicationDestinationPrefixes("/pub");
		registry
			.enableStompBrokerRelay("/topic")
			.setRelayHost(rabbitmqHost)
			.setRelayPort(61613)
			.setSystemLogin(rabbitmqUsername)
			.setSystemPasscode(rabbitmqPassword)
			.setClientLogin(rabbitmqUsername)
			.setClientPasscode(rabbitmqPassword);
	}
}
