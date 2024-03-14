package com.ssafy.triptogether.tripaccount.domain;

import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.settlement.domain.Settlement;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "account_history")
public class AccountHistory extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_history_id")
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private Type type;

    @NotBlank
    @Column(name = "business_name")
    private String businessName;

    @NotBlank
    @Column(name = "business_num")
    private String businessNum;

    @NotBlank
    @Column(name = "address")
    private String address;

    @NotNull
    @Column(name = "quantity")
    private Double quantity;

    @NotBlank
    @Column(name = "currency")
    private String currency;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "trip_account_id")
    private TripAccount tripAccount;

    @Builder
    public AccountHistory(Type type, String businessName, String businessNum, String address, Double quantity, String currency, TripAccount tripAccount) {
        this.type = type;
        this.businessName = businessName;
        this.businessNum = businessNum;
        this.address = address;
        this.quantity = quantity;
        this.currency = currency;
        setTripAccount(tripAccount);
    }

    public void setTripAccount(TripAccount tripAccount) {
        this.tripAccount = tripAccount;
        tripAccount.getAccountHistories().add(this);
    }
}
