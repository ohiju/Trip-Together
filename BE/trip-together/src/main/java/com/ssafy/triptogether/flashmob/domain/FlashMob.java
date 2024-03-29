package com.ssafy.triptogether.flashmob.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.attraction.data.request.FlashmobUpdateRequest;
import com.ssafy.triptogether.attraction.domain.Attraction;
import com.ssafy.triptogether.global.domain.BaseEntity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "flash_mob")
public class FlashMob extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "flash_mob_id")
    private Long id;

    @NotBlank
    @Column(name = "title")
    private String title;

    @NotNull
    @Column(name = "start_at")
    private LocalDateTime startAt;

    @NotNull
    @Column(name = "max_member_count")
    private Integer maxMemberCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attraction_id")
    private Attraction attraction;

    @JsonIgnore
    @OneToMany(mappedBy = "flashMob", cascade = CascadeType.ALL)
    private List<MemberFlashMob> memberFlashMobs = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "flashMob", cascade = CascadeType.ALL)
    private List<Settlement> settlements = new ArrayList<>();

    @Builder
    public FlashMob(String title, LocalDateTime startAt, Attraction attraction, Integer maxMemberCount) {
        this.title = title;
        this.startAt = startAt;
        setAttraction(attraction);
        this.maxMemberCount = maxMemberCount;
    }

    public void setAttraction(Attraction attraction) {
        this.attraction = attraction;
        attraction.getFlashMobs().add(this);
    }

    public void update(FlashmobUpdateRequest request) {
        this.title = request.title();
        this.startAt = request.startAt();
        this.maxMemberCount = request.maxMemberCount();
    }
}