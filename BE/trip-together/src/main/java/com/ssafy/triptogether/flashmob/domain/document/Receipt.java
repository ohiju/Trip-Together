package com.ssafy.triptogether.flashmob.domain.document;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collection = "receipt")
public class Receipt {

	@Field("receipt_histories")
	List<ReceiptHistory> receiptHistories;
	@Id
	@Field("member_settlement_id")
	private Long memberSettlementId;

	@Builder
	public Receipt(List<ReceiptHistory> receiptHistories, Long memberSettlementId) {
		this.receiptHistories = receiptHistories;
		this.memberSettlementId = memberSettlementId;
	}
}
