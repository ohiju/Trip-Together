package com.ssafy.triptogether.member.domain;

import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.settlement.domain.Settlement;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member_settlement")
public class MemberSettlement extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_settlement_id")
    private Long id;

    @NotNull
    @Column(name = "is_requester")
    private Boolean isRequester;

    @NotNull
    @Column(name = "has_sent")
    private Boolean hasSent;

    @NotNull
    @Column(name = "price")
    private Double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "settlement_id")
    private Settlement settlement;

    @Builder
    public MemberSettlement(Boolean isRequester, Boolean hasSent, Double price, Member member, Settlement settlement) {
        this.isRequester = isRequester;
        this.hasSent = hasSent;
        this.price = price;
        setMember(member);
        setSettlement(settlement);
    }

    public void setSettlement(Settlement settlement) {
        this.settlement = settlement;
        settlement.getMemberSettlements().add(this);
    }

    public void setMember(Member member) {
        this.member = member;
        member.getMemberSettlements().add(this);
    }
}
