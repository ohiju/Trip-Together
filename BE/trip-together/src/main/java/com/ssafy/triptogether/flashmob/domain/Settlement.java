package com.ssafy.triptogether.flashmob.domain;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
	public Settlement(Double totalPrice, Integer attendanceCount, CurrencyCode currencyCode, FlashMob flashMob) {
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
