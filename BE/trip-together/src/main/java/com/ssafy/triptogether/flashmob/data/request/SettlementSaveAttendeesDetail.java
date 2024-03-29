package com.ssafy.triptogether.flashmob.data.request;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record SettlementSaveAttendeesDetail(
	@NotNull @JsonProperty("member_id")
	Long memberId,
	@NotNull @JsonProperty("member_price")
	Double memberPrice,
	@NotNull @JsonProperty("receipts")
	List<AttendeesReceiptDetail> receiptDetails
) {
}
