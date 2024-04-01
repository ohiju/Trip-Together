package com.ssafy.triptogether.attraction.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public record AttractionFlashmobListItemResponse(
    @JsonProperty("attraction_id") Long attractionId,
    @JsonProperty("thumbnail_image_url") String thumbnailImageUrl,
    String name,
    String address,
    @JsonProperty("avg_rating") Double avgRating,
    @JsonProperty("avg_price") Double avgPrice,
    String latitude,
    String longitude,
    @JsonProperty("flashmob_count") Long flashmobCount
) {
    public AttractionFlashmobListItemResponse {
        if (thumbnailImageUrl == null) {
            thumbnailImageUrl = "";
        }
        if (address == null) {
            address = "";
        }
        if (avgRating == null) {
            avgRating = 0.0;
        }
        if (avgPrice == null) {
            avgPrice = 0.0;
        }
        if (flashmobCount == null) {
            flashmobCount = 0L;
        }
    }
}
