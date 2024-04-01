package com.ssafy.triptogether.tripaccount.domain;

import com.ssafy.triptogether.global.domain.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "trip_account_id")
	private TripAccount tripAccount;

	@Builder
	public AccountHistory(Type type, String businessName, String businessNum, String address, Double quantity,
		TripAccount tripAccount) {
		this.type = type;
		this.businessName = businessName;
		this.businessNum = businessNum;
		this.address = address;
		this.quantity = quantity;
		setTripAccount(tripAccount);
	}

	public void setTripAccount(TripAccount tripAccount) {
		this.tripAccount = tripAccount;
		tripAccount.getAccountHistories().add(this);
	}
}
