package com.ssafy.triptogether.flashmob.domain;

import com.ssafy.triptogether.member.domain.Member;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("REQUESTER")
public class RequesterSettlement extends MemberSettlement {

	public RequesterSettlement(Member member, Settlement settlement) {
		super(member, settlement);
	}
}