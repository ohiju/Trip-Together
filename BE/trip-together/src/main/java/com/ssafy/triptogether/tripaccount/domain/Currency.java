package com.ssafy.triptogether.tripaccount.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "currency"
//        uniqueConstraints = {
//            @UniqueConstraint(columnNames = {
//                    "code",
//                    "unit",
//                    "nation",
//                    "flag_image_url"
//            })
//        }
)
public class Currency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "currency_id")
    private Long id;

    @NotBlank
    @Column(name = "code")
    private String code;

    @NotBlank
    @Column(name = "unit")
    private String unit;

    @NotBlank
    @Column(name = "nation")
    private String nation;

    @NotBlank
    @Column(name = "flag_image_url")
    private String flagImageUrl;

    @JsonIgnore
    @OneToMany(mappedBy = "currency")
    private List<TripAccount> tripAccounts = new ArrayList<>();

    @Builder
    public Currency(String code, String unit, String nation, String flagImageUrl) {
        this.code = code;
        this.unit = unit;
        this.nation = nation;
        this.flagImageUrl = flagImageUrl;
    }
}
