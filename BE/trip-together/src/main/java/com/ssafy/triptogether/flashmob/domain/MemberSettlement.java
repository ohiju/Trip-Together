package com.ssafy.triptogether.flashmob.domain;

import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.member.domain.Member;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
@Getter
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member_settlement")
public abstract class MemberSettlement extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_settlement_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "settlement_id")
    private Settlement settlement;

    public MemberSettlement(Member member, Settlement settlement) {
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
