package com.ssafy.triptogether.attraction.data.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafy.triptogether.attraction.domain.Nation;

import lombok.Builder;

@Builder
public record RegionLoadDetail(
	@JsonProperty("region_id")
	Long regionId,
	@JsonProperty("nation")
	Nation nation,
	@JsonProperty("city_name")
	String cityName,
	@JsonProperty("latitude")
	String latitude,
	@JsonProperty("longitude")
	String longitude
) {
}
