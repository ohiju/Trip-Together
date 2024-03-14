package com.ssafy.triptogether.attraction.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "attraction_category")
public class AttractionCategory {
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
