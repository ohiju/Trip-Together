package com.ssafy.triptogether.tripaccount.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record TripAccountPaymentRequest(
	@NotBlank @JsonProperty("pin_num")
	String pinNum,
	@NotNull @JsonProperty("quantity")
	Double quantity,
	@NotNull @JsonProperty("attraction_business_num")
	String attractionBusinessNum
) {
}
