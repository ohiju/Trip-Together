package com.ssafy.triptogether.settlement.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.flashmob.domain.FlashMob;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.member.domain.MemberSettlement;
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
@Table(name = "settlement")
public class Settlement extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "settlement_id")
    private Long id;

    @NotBlank
    @Column(name = "total_price")
    private Double totalPrice;

    @NotBlank
    @Column(name = "attendance_count")
    private Integer attendanceCount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flash_mob_id")
    private FlashMob flashMob;

    @JsonIgnore
    @OneToMany(mappedBy = "settlement", cascade = CascadeType.ALL)
    private List<MemberSettlement> memberSettlements = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "settlement", cascade = CascadeType.ALL)
    private List<Receipt> receipts = new ArrayList<>();

    @Builder
    public Settlement(Double totalPrice, Integer attendanceCount, FlashMob flashMob) {
        this.totalPrice = totalPrice;
        this.attendanceCount = attendanceCount;
        setFlashMob(flashMob);
    }

    public void setFlashMob(FlashMob flashMob) {
        this.flashMob = flashMob;
        flashMob.getSettlements().add(this);
    }
}
