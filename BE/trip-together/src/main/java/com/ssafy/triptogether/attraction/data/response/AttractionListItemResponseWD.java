package com.ssafy.triptogether.attraction.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;

@Builder
public record AttractionListItemResponseWD(
	@JsonProperty("attraction_id")
	Long attractionId,
	@JsonProperty("thumbnail_image_url")
	String thumbnailImageUrl,
	String name,
	String address,
	@JsonProperty("avg_rating")
	Double avgRating,
	@JsonProperty("avg_price")
	Double avgPrice,
	String longitude,
	String latitude,
	Double distance
) {
}
