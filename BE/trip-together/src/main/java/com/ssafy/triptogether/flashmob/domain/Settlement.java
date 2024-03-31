package com.ssafy.triptogether.flashmob.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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

    @NotNull
    @Column(name = "requester_id")
    private Long requesterId;

    @NotNull
    @Column(name = "total_price")
    private Double totalPrice;

    @NotNull
    @Column(name = "attendance_count")
    private Integer attendanceCount;

    @NotNull
    @Column(name = "currency_code")
    private CurrencyCode currencyCode;

    @NotNull
    @Column(name = "is_done")
    private Boolean isDone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flash_mob_id")
    private FlashMob flashMob;

    @JsonIgnore
    @OneToMany(mappedBy = "settlement", cascade = CascadeType.ALL)
    private List<MemberSettlement> memberSettlements = new ArrayList<>();

    @Builder
    public Settlement(Long requesterId, Double totalPrice, Integer attendanceCount, CurrencyCode currencyCode, FlashMob flashMob) {
        this.requesterId = requesterId;
        this.totalPrice = totalPrice;
        this.attendanceCount = attendanceCount;
        this.currencyCode = currencyCode;
        this.isDone = false;
        setFlashMob(flashMob);
    }

    public void setFlashMob(FlashMob flashMob) {
        this.flashMob = flashMob;
        flashMob.getSettlements().add(this);
    }
}
