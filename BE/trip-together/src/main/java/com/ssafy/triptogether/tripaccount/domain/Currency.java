package com.ssafy.triptogether.tripaccount.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.global.domain.BaseEntity;
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
@Table(name = "currency",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {
                        "code",
                        "unit",
                        "currency_nation"
                })
        }
)
public class Currency extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "currency_id")
    private Long id;

    @NotBlank
    @Column(name = "code")
    private String code;

    @NotBlank
    @Column(name = "unit")
    private Integer unit;

    @NotBlank
    @Enumerated(EnumType.STRING)
    @Column(name = "currency_nation")
    private CurrencyNation currencyNation;

    @NotBlank
    @Column(name = "rate")
    private Double rate;

    @Builder
    public Currency(String code, Integer unit, CurrencyNation currencyNation, Double rate) {
        this.code = code;
        this.unit = unit;
        this.currencyNation = currencyNation;
        this.rate = rate;
    }
}
