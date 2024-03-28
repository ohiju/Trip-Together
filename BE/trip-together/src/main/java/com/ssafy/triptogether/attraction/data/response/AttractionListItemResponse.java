package com.ssafy.triptogether.attraction.data.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record AttractionListItemResponse(
	@JsonProperty("attraction_id")
	String attractionId,
	@JsonProperty("thumbnail_image_url")
	String thumbnailImageUrl,
	String name,
	String address,
	@JsonProperty("avg_rating")
	String avgRating,
	@JsonProperty("avg_price")
	String avgPrice,
	String latitude,
	String longitude
) { }
