package com.ssafy.triptogether.attraction.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.plan.domain.Plan;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

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
    @Column(name = "longitude")
    private String longitude;

    @NotBlank
    @Column(name = "flag_image_url")
    private String flagImageUrl;

    @JsonIgnore
    @OneToMany(mappedBy = "region", cascade = CascadeType.ALL)
    private List<Attraction> attractions = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "region", cascade = CascadeType.ALL)
    private List<Plan> plans = new ArrayList<>();

    @Builder
    public Region(Nation nation, String cityName, String latitude, String longitude, String flagImageUrl) {
        this.nation = nation;
        this.cityName = cityName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.flagImageUrl = flagImageUrl;
    }
}
