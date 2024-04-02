package com.ssafy.triptogether.tripaccount.repository.query;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.tripaccount.domain.AccountHistory;
import com.ssafy.triptogether.tripaccount.domain.CurrencyCode;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;

import static com.querydsl.core.types.Order.ASC;
import static com.querydsl.core.types.Order.DESC;
import static com.ssafy.triptogether.tripaccount.domain.QAccountHistory.accountHistory;
import static com.ssafy.triptogether.tripaccount.domain.QTripAccount.tripAccount;

@RequiredArgsConstructor
public class AccountHistoryRepositoryCustomImpl implements AccountHistoryRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public Page<AccountHistory> findAccountHistoriesLoadDetailByMemberId(Long memberId, Pageable pageable, CurrencyCode currencyCode) {
        BooleanBuilder whereClause = new BooleanBuilder(tripAccount.member.id.eq(memberId));
        if (currencyCode != null) {
            whereClause.and(tripAccount.currency.code.eq(currencyCode));
        }

        JPAQuery<AccountHistory> query = queryFactory.selectFrom(accountHistory)
            .join(accountHistory.tripAccount, tripAccount)
            .where(whereClause);

        for (Sort.Order o : pageable.getSort()) {
            PathBuilder<AccountHistory> entityPath = new PathBuilder<>(AccountHistory.class, "accountHistory");
            PathBuilder<Object> path = entityPath.get(o.getProperty());
            query.orderBy(new OrderSpecifier(o.isAscending() ? ASC : DESC, path));
        }

        List<AccountHistory> accountHistories = query.offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        Long total = queryFactory.select(accountHistory.count())
            .from(accountHistory)
            .join(accountHistory.tripAccount, tripAccount)
            .where(tripAccount.member.id.eq(memberId))
            .fetchOne();
        long totalCount = total != null ? total : 0L;

        return new PageImpl<>(accountHistories, pageable, totalCount);
    }
}
