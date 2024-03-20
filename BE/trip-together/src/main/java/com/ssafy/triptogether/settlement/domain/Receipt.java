package com.ssafy.triptogether.settlement.domain;

import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.tripaccount.domain.AccountHistory;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "receipt")
public class Receipt extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "receipt")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_history")
    private AccountHistory accountHistory;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "settlement_id")
    private Settlement settlement;

    @Builder
    public Receipt(AccountHistory accountHistory, Settlement settlement) {
        this.accountHistory = accountHistory;
        setSettlement(settlement);
    }

    public void setSettlement(Settlement settlement) {
        this.settlement = settlement;
        settlement.getReceipts().add(this);
    }
}
