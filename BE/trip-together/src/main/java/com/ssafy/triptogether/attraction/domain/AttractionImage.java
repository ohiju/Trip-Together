package com.ssafy.triptogether.attraction.domain;

import com.ssafy.triptogether.global.domain.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "attraction_image")
public class AttractionImage extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "attraction_image_id")
	private Long id;

	@NotBlank
	@Column(name = "image_url", length = 3000)
	private String imageUrl;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "attraction_id")
	private Attraction attraction;

	@Builder
	public AttractionImage(String imageUrl, Attraction attraction) {
		this.imageUrl = imageUrl;
		setAttraction(attraction);
	}

	public void setAttraction(Attraction attraction) {
		this.attraction = attraction;
		attraction.getAttractionImages().add(this);
	}
}
