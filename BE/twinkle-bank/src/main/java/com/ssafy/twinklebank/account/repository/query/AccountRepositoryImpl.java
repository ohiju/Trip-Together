package com.ssafy.twinklebank.account.repository.query;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.twinklebank.account.data.AccountResponse;
import lombok.RequiredArgsConstructor;

import java.util.List;

import static com.ssafy.twinklebank.account.domain.QAccount.account;

@RequiredArgsConstructor
public class AccountRepositoryImpl implements AccountRepositoryCustom {

    private final JPAQueryFactory queryFactory;
    @Override
    public List<AccountResponse> getAccountList(String tranId) {
        return queryFactory.select(Projections.constructor(AccountResponse.class,
                account.uuid,
                account.accountNum,
                account.balance,
                account.name
                ))
                .from(account)
//                .join().on()
                .where(account.member.id.eq(1L))
                .fetch();
    }
}
