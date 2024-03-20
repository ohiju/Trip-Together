package com.ssafy.triptogether.syncaccount.repository.query;

import java.util.List;

import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsDetail;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class SyncAccountRepositoryCustomImpl implements SyncAccountRepositoryCustom {
	@Override
	public List<SyncAccountsDetail> memberSyncAccountsLoad(long memberId) {
		return null;
	}
}
