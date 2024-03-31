package com.ssafy.triptogether.flashmob.domain;

import com.ssafy.triptogether.flashmob.domain.Settlement;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.member.domain.Member;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
@Getter
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

    @Builder
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
