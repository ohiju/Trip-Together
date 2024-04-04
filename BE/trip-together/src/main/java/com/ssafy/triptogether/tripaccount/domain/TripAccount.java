package com.ssafy.triptogether.tripaccount.domain;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.global.utils.BigDecimalUtil;
import com.ssafy.triptogether.member.domain.Member;

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
@Table(name = "trip_account")
public class TripAccount extends BaseEntity {
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
	private String balance;

	@JsonIgnore
	@OneToMany(mappedBy = "tripAccount", cascade = CascadeType.ALL)
	private List<AccountHistory> accountHistories = new ArrayList<>();

	@Builder
	public TripAccount(Member member, Currency currency, String balance) {
		setMember(member);
		this.currency = currency;
		this.balance = balance;
	}

	public void setMember(Member member) {
		this.member = member;
		member.getTripAccounts().add(this);
	}

	public void depositBalance(String newBalance) {
		// this.balance += newBalance;
		this.balance = BigDecimalUtil.add(balance, newBalance);
	}

	public void withdrawBalance(String newBalance) {
		this.balance = BigDecimalUtil.withdrawalBalance(balance, newBalance);
	}
}
