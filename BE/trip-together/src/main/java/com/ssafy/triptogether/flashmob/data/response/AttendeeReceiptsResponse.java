package com.ssafy.triptogether.flashmob.data.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.flashmob.data.request.AttendeesReceiptDetail;

import lombok.Builder;

@Builder
public record AttendeeReceiptsResponse(
	@JsonProperty("price")
	Double price,
	@JsonProperty("has_sent")
	Boolean hasSent,
	@JsonProperty("receipts")
	List<AttendeesReceiptDetail> attendeesReceiptDetails
) {
}
