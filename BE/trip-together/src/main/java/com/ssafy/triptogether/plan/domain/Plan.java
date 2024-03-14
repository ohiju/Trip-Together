package com.ssafy.triptogether.plan.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.attraction.domain.Attraction;
import com.ssafy.triptogether.attraction.domain.Region;
import com.ssafy.triptogether.member.domain.Member;
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
@Table(name = "plan")
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plan_id")
    private Long id;

    @NotBlank
    @Column(name = "title")
    private String title;

    @Column(name = "real_budget")
    private Double realBudget;

    @NotNull
    @Column(name = "start_at")
    private LocalDateTime startAt;

    @NotNull
    @Column(name = "end_at")
    private LocalDateTime endAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "region_id")
    private Region region;

    @OneToMany(mappedBy = "plan")
    @JsonIgnore
    private List<PlanAttraction> planAttractions =new ArrayList<>();

    @Builder
    public Plan(String title, LocalDateTime startAt, LocalDateTime endAt, Member member, Region region) {
        this.title = title;
        this.startAt = startAt;
        this.endAt = endAt;
        setMember(member);
        setRegion(region);
    }

    public void setRegion(Region region) {
        this.region = region;
        region.getPlans().add(this);
    }

    public void setMember(Member member) {
        this.member = member;
        member.getPlans().add(this);
    }
}
