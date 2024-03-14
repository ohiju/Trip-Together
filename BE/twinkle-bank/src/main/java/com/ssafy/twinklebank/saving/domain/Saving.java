package com.ssafy.twinklebank.saving.domain;

import com.ssafy.twinklebank.global.domain.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "saving")
public class Saving extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "saving_id")
	private Long id;

	@NotBlank
	@Column(name = "name")
	private String name;

	@NotNull
	@Column(name = "base_interest_rate")
	private Double baseInterestRate;

	@NotNull
	@Column(name = "highest_interest_rate")
	private Double highestInterestRate;

	@NotNull
	@Column(name = "duration")
	private Integer duration;

	@Column(name = "description", columnDefinition = "TEXT")
	private String description;

	// TODO : ENUM 상의 후 결정 하기
	@NotNull
	@Column(name = "interest_payment_type")
	private InterestPaymentMethodType interestPaymentMethod;

	@NotNull
	@Column(name ="type")
	private SavingType type;

	@NotNull
	@Column(name = "subscription_method")
	private SubscriptionMethodType subscriptionMethod;

	@Builder
	public Saving(String name, Double baseInterestRate, Double highestInterestRate, Integer duration,
		InterestPaymentMethodType interestPaymentMethod, SavingType type, SubscriptionMethodType subscriptionMethod) {
		this.name = name;
		this.baseInterestRate = baseInterestRate;
		this.highestInterestRate = highestInterestRate;
		this.duration = duration;
		this.interestPaymentMethod = interestPaymentMethod;
		this.type = type;
		this.subscriptionMethod = subscriptionMethod;
	}
}
