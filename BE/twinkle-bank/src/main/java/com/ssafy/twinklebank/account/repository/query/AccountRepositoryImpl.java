package com.ssafy.twinklebank.account.repository.query;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.twinklebank.account.data.AccountResponse;
import com.ssafy.twinklebank.account.domain.QWithdrawalAgreement;

import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.ssafy.twinklebank.account.domain.QAccount.account;
import static com.ssafy.twinklebank.account.domain.QWithdrawalAgreement.*;

@RequiredArgsConstructor
public class AccountRepositoryImpl implements AccountRepositoryCustom {

    private final JPAQueryFactory queryFactory;
    @Override
    public List<AccountResponse> getAccountList(String appId, long memberId) {
        return queryFactory.select(Projections.constructor(AccountResponse.class,
                account.uuid,
                account.accountNum,
                account.balance,
                account.name
                ))
                .from(account)
                .join(withdrawalAgreement).on(withdrawalAgreement.id.eq(account.id))
                .where(
                    account.member.id.eq(memberId).and(
                        withdrawalAgreement.application.clientId.eq(appId)))
                .fetch();
    }
}
