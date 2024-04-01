package com.ssafy.triptogether.flashmob.domain;

import com.ssafy.triptogether.member.domain.Member;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DiscriminatorValue("PARTICIPANT")
public class ParticipantSettlement extends MemberSettlement {

	@NotNull
	@Column(name = "has_sent")
	private Boolean hasSent;

	@NotNull
	@Column(name = "price")
	private Double price;

	@Builder
	public ParticipantSettlement(Member member, Settlement settlement, Boolean hasSent, Double price) {
		super(member, settlement);
		this.hasSent = hasSent;
		this.price = price;
	}

	public void settlementSend() {
		this.hasSent = true;
	}
}