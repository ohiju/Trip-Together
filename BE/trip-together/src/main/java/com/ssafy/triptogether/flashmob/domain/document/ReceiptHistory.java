package com.ssafy.triptogether.flashmob.domain.document;

import java.time.LocalDateTime;

import org.springframework.data.mongodb.core.mapping.Field;

import lombok.Builder;

@Builder
public record ReceiptHistory(
	@Field("business_name") String businessName,
	@Field("price") Double price,
	@Field("created_at") LocalDateTime createdAt
) {
}
