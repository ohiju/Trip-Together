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
@Table(name = "saving_target")
public class SavingTarget extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "saving_target_id")
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "target_id")
	private Target target;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "saving_id")
	private Saving saving;

	@Builder
	public SavingTarget(Target target, Saving saving) {
		this.target = target;
		this.saving = saving;
	}
}
