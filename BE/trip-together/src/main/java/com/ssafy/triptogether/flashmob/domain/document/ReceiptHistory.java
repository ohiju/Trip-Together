package com.ssafy.triptogether.flashmob.domain.document;

import lombok.Builder;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Builder
public record ReceiptHistory(
        @Field("business_name") String businessName,
        @Field("price") Double price,
        @Field("created_at") LocalDateTime createdAt
) {
}
