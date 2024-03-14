package com.ssafy.triptogether.tripaccount.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.member.domain.Member;
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
@Table(name = "trip_account")
public class TripAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_account_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "currency_id")
    private Currency currency;

    @NotNull
    @Column(name = "balance")
    private Double balance;

    @JsonIgnore
    @OneToMany(mappedBy = "tripAccount")
    private List<AccountHistory> accountHistories = new ArrayList<>();

    @Builder
    public TripAccount(Member member, Currency currency, Double balance) {
        setMember(member);
        setCurrency(currency);
        this.balance = balance;
    }

    public void setMember(Member member) {
        this.member = member;
        member.getTripAccounts().add(this);
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
        currency.getTripAccounts().add(this);
    }
}
