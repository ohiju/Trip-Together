package com.ssafy.twinklebank.account.repository.query;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.twinklebank.account.data.response.AccountResponse;

import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.ssafy.twinklebank.account.domain.QAccount.account;
import static com.ssafy.twinklebank.account.domain.QWithdrawalAgreement.withdrawalAgreement;
import static com.ssafy.twinklebank.application.domain.QApplication.*;
import static com.ssafy.twinklebank.member.domain.QMember.*;

@RequiredArgsConstructor
public class AccountRepositoryImpl implements AccountRepositoryCustom {

	private final JPAQueryFactory queryFactory;

	@Override
	public List<AccountResponse> getAccountList(String clientId, long memberId) {
		return queryFactory.select(Projections.constructor(AccountResponse.class,
				account.uuid,
				account.accountNum,
				account.balance,
				account.name,
				application.clientId.eq(clientId)))
			.from(account)
			.leftJoin(withdrawalAgreement).on(withdrawalAgreement.account.id.eq(account.id))
			.leftJoin(application).on(application.id.eq(withdrawalAgreement.application.id))
			.innerJoin(member).on(member.id.eq(account.member.id))
			.where(member.id.eq(memberId))
			.fetch();
	}
}
