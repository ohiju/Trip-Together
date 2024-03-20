package com.ssafy.triptogether.syncaccount.repository.query;

import static com.ssafy.triptogether.syncaccount.domain.QSyncAccount.*;

import java.util.List;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsDetail;
import com.ssafy.triptogether.syncaccount.domain.QSyncAccount;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SyncAccountRepositoryCustomImpl implements SyncAccountRepositoryCustom {
	private final JPAQueryFactory queryFactory;

	/**
	 * 사용자의 연동 계좌 목록 조회
	 * @param memberId 요청자의 member_id
	 * @return 연동 계좌 목록
	 */
	@Override
	public List<SyncAccountsDetail> memberSyncAccountsLoad(long memberId) {
		return queryFactory.select(Projections.bean(SyncAccountsDetail.class,
				syncAccount.uuid.as("uuid"),
				syncAccount.num.as("accountNum"),
				syncAccount.name.as("name"),
				syncAccount.isMain.as("isMain")
			)).from(syncAccount)
			.where(syncAccount.member.id.eq(memberId))
			.fetch();
	}
}
