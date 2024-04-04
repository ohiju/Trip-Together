package com.ssafy.triptogether.attraction.domain;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.plan.domain.Plan;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "region")
public class Region extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "region_id")
	private Long id;

	@NotBlank
	@Enumerated(EnumType.STRING)
	@Column(name = "nation")
	private Nation nation;

	@NotBlank
	@Column(name = "city_name")
	private String cityName;

	@NotBlank
	@Column(name = "latitude")
	private String latitude;

	@NotBlank
	@Column(name = "latitude_delta")
	private String latitudeDelta;

	@NotBlank
	@Column(name = "longitude")
	private String longitude;

	@NotBlank
	@Column(name = "longitude_delta")
	private String longitudeDelta;

	@JsonIgnore
	@OneToMany(mappedBy = "region", cascade = CascadeType.ALL)
	private List<Attraction> attractions = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "region", cascade = CascadeType.ALL)
	private List<Plan> plans = new ArrayList<>();

	@Builder
	public Region(Nation nation, String cityName, String latitude, String longitude, String latitudeDelta,
		String longitudeDelta) {
		this.nation = nation;
		this.cityName = cityName;
		this.latitude = latitude;
		this.latitudeDelta = latitudeDelta;
		this.longitude = longitude;
		this.longitudeDelta = longitudeDelta;
	}
}
