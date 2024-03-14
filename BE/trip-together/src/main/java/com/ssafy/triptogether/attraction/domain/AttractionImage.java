package com.ssafy.triptogether.attraction.domain;

import com.ssafy.triptogether.global.domain.BaseEntity;
import jakarta.persistence.*;
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
    @Column(name = "image_url")
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
