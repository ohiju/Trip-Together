package com.ssafy.triptogether.flashmob.data.request;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record AttendeesReceiptDetail(
	@NotBlank @JsonProperty("business_name")
	String businessName,
	@NotNull @JsonProperty("price")
	Double price,
	@NotNull @JsonProperty("created_at")
	LocalDateTime createdAt
) {
}
