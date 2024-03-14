package com.ssafy.triptogether.member.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.plan.domain.Plan;
import com.ssafy.triptogether.review.domain.Review;
import com.ssafy.triptogether.syncaccount.domain.SyncAccount;
import com.ssafy.triptogether.tripaccount.domain.TripAccount;
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
@Table(name = "member")
public class Member extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(name = "bank_uuid")
    private String uuid;

    @Column(name = "pin_num")
    private String pinNum;

    @NotBlank
    @Column(name = "nickname")
    private String nickname;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "description")
    private String description;

    @Column(name = "rate")
    private Double rate;

    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<TripAccount> tripAccounts = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<SyncAccount> syncAccounts = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Review> reviews = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Plan> plans = new ArrayList<>();

    @Builder
    public Member(String uuid, String nickname) {
        this.uuid = uuid;
        this.nickname = nickname;
    }
}
