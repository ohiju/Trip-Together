package com.ssafy.twinklebank.saving.domain;

import com.ssafy.twinklebank.global.domain.BaseEntity;

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
@Table(name = "saving_preferred_condition")
public class SavingPreferredCondition extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "saving_preferred_condition_id")
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "saving_id")
	private Saving saving;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "preferred_condition_id")
	private PreferredCondition preferredCondition;

	@Builder
	public SavingPreferredCondition(Saving saving, PreferredCondition preferredCondition) {
		this.saving = saving;
		this.preferredCondition = preferredCondition;
	}
}
