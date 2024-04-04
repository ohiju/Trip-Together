package com.ssafy.triptogether.attraction.data.request;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;

public record FlashmobCreateRequest(
	@NotNull
	String title,
	@NotNull @JsonProperty("start_time") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	LocalDateTime startTime,
	@NotNull @JsonProperty("max_users")
	Integer maxUsers
) {
}
