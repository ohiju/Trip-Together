package com.ssafy.twinklebank.account.domain;

import org.springframework.scheduling.concurrent.ScheduledExecutorTask;

import com.ssafy.twinklebank.global.domain.BaseEntity;

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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "account_id")
	private Account account;

	@NotNull
	@Enumerated(EnumType.STRING)
	@Column(name = "type")
	private Type type;

	@NotBlank
	@Column(name = "business_name")
	private String businessName;

	@NotBlank
	@Column(name = "address")
	private String address;

	@NotNull
	@Column(name = "price")
	private Double price;

	@Builder
	public AccountHistory(Account account, Type type, String businessName, String address, Double price) {
		setAccount(account);
		this.type = type;
		this.businessName = businessName;
		this.address = address;
		this.price = price;
	}
	public void setAccount(Account account){
		this.account = account;
		account.getAccountHistories().add(this);
	}
}
