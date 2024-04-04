package com.ssafy.triptogether.plan.data.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record AttractionDetail(
	@JsonProperty("attraction_id")
	Long attractionId,
	@JsonProperty("attraction_name")
	String attractionName,
	@JsonProperty("avg_rating")
	Integer avgRating,
	@JsonProperty("avg_price")
	Double avgPrice,
	@JsonProperty("thumbnail_image_url")
	String thumbnailImageUrl,
	String address
) {
}
