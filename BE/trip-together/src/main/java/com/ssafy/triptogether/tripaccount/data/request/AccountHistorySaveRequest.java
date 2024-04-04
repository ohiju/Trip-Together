package com.ssafy.triptogether.tripaccount.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record AccountHistorySaveRequest(
	@JsonProperty("payment_sender")
	PaymentSenderDetail paymentSenderDetail,
	@JsonProperty("payment_receiver")
	PaymentReceiverDetail paymentReceiverDetail
) {
}
