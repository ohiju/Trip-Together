package com.ssafy.triptogether.plan.domain;

import com.ssafy.triptogether.attraction.domain.Attraction;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "plan_attraction")
public class PlanAttraction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plan_attraction_id")
    private Long planAttractionId;

    @NotNull
    @Column(name = "trip_at")
    private LocalDateTime tripAt;

    @NotNull
    @Column(name = "sequence")
    private Integer sequence;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plan_id")
    private Plan plan;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attraction_id")
    private Attraction attraction;

    @Builder
    public PlanAttraction(LocalDateTime tripAt, Integer sequence, Plan plan, Attraction attraction) {
        this.tripAt = tripAt;
        this.sequence = sequence;
        setPlan(plan);
        setAttraction(attraction);
    }

    public void setAttraction(Attraction attraction) {
        this.attraction = attraction;
        attraction.getPlanAttractions().add(this);
    }

    public void setPlan(Plan plan) {
        this.plan = plan;
        plan.getPlanAttractions().add(this);
    }
}
