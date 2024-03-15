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
@Table(name = "preferred_condition")
public class PreferredCondition extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "preferred_condition_id")
	private Long id;

	@NotBlank
	@Column(name = "type")
	private String type;

	@Builder
	public PreferredCondition(String type) {
		this.type = type;
	}
}
