package com.ssafy.twinklebank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class TwinkleBankApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwinkleBankApplication.class, args);
	}

}
