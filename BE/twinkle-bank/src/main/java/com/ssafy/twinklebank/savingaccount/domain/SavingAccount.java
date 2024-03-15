package com.ssafy.twinklebank.savingaccount.domain;

import com.ssafy.twinklebank.global.domain.BaseEntity;
import com.ssafy.twinklebank.member.domain.Member;
import com.ssafy.twinklebank.saving.domain.Saving;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "saving_account")
public class SavingAccount extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "saving_account_id")
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "member_id")
	private Member member;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "saving_id")
	private Saving saving;

	@Column(name = "interest_rate")
	private Double interestRate;

	@Builder
	public SavingAccount(Member member, Saving saving, Double interestRate) {
		setMember(member);
		this.saving = saving;
		this.interestRate = interestRate;
	}

	public void setMember(Member member) {
		this.member = member;
		member.getSavingAccounts().add(this);
	}
}
