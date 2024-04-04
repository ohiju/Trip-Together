package com.ssafy.triptogether.flashmob.domain;

import com.ssafy.triptogether.member.domain.Member;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DiscriminatorValue("REQUESTER")
public class RequesterSettlement extends MemberSettlement {

	@Builder
	public RequesterSettlement(Member member, Settlement settlement) {
		super(member, settlement);
	}
}