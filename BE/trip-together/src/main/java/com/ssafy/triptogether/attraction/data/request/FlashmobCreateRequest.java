package com.ssafy.triptogether.attraction.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;

public record FlashmobCreateRequest(
	@NotNull
	String title,
	@NotNull @JsonProperty("start_time")
	String startTime,
	@NotNull @JsonProperty("max_users")
	Integer maxUsers
) { }
