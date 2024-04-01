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
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "attraction_category")
public class AttractionCategory extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "attraction_category_id")
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "attraction_id")
	private Attraction attraction;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "category_id")
	private Category category;

	@Builder
	public AttractionCategory(Attraction attraction, Category category) {
		setAttraction(attraction);
		setCategory(category);
	}

	public void setCategory(Category category) {
		this.category = category;
		category.getAttractionCategories().add(this);
	}

	public void setAttraction(Attraction attraction) {
		this.attraction = attraction;
		attraction.getAttractionCategories().add(this);
	}
}
