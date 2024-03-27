package com.ssafy.twinklebank.account.repository.query;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.CaseBuilder;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.application.domain.QApplication;
import com.ssafy.twinklebank.member.domain.QMember;

import lombok.RequiredArgsConstructor;

import java.beans.Expression;
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
		// return queryFactory.select(Projections.constructor(AccountResponse.class,
		// 		account.uuid,
		// 		account.accountNum,
		// 		account.balance,
		// 		account.name
		// 	))
		// 	.from(account)
		// 	.join(withdrawalAgreement).on(withdrawalAgreement.id.eq(account.id))
		// 	.where(
		// 		account.member.id.eq(memberId).and(
		// 			withdrawalAgreement.application.clientId.eq(clientId)))
		// 	.fetch();

		// return queryFactory.select(Projections.constructor(AccountResponse.class,
		// 		account.uuid,
		// 		account.accountNum,
		// 		account.balance,
		// 		account.name,
		// 	    withdrawalAgreement.application.clientId.eq(clientId)))
		// 	.from(withdrawalAgreement)
		// 	.rightJoin(withdrawalAgreement.account, account).on(withdrawalAgreement.id.eq(account.id))
		// 	.where(
		// 		account.member.id.eq(memberId))
		// 	.fetch();

		return queryFactory.select(Projections.constructor(AccountResponse.class,
				account.uuid,
				account.accountNum,
				account.balance,
				account.name,
				application.clientId.eq(clientId)))
			.from(account)
			.leftJoin(withdrawalAgreement).on(withdrawalAgreement.account.id.eq(account.id))
			.innerJoin(application).on(application.id.eq(withdrawalAgreement.application.id))
			.innerJoin(member).on(member.id.eq(account.member.id))
			.where(member.id.eq(memberId))
			.fetch();
	}
}
