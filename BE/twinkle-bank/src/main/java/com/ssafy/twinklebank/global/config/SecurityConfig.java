package com.ssafy.twinklebank.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig {
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.httpBasic(HttpBasicConfigurer::disable)
			.csrf(CsrfConfigurer::disable)
			//.cors(cors -> cors.configurationSource(corsConfigurationSource()))
			.sessionManagement(configurer ->
				configurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.authorizeHttpRequests(authorize ->
				authorize
					.requestMatchers("/**").permitAll()
					.anyRequest().authenticated());
		// .requestMatchers("/user", "/user/login").permitAll()
		// .requestMatchers("/user/email_check/**", "/user/nickname_check/**").permitAll()
		// .requestMatchers("/user/email_cert").permitAll()
		// .requestMatchers("/send-mail/**").permitAll()
		// .anyRequest().authenticated())
		// .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider, userRepository, redisTemplate),
		// 	UsernamePasswordAuthenticationFilter.class)
		// .addFilterBefore(new ExceptionHandlerFilter(), JwtAuthenticationFilter.class);

		return http.build();
	}

	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
