package com.ssafy.triptogether.member.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Member {
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
    @OneToMany(mappedBy = "member")
    private List<TripAccount> tripAccounts = new ArrayList<>();

    @Builder
    public Member(String uuid, String nickname) {
        this.uuid = uuid;
        this.nickname = nickname;
    }
}
