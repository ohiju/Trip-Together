package com.ssafy.triptogether.flashmob.domain.document;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

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
