package com.ssafy.triptogether.syncaccount.repository.query;

import java.util.List;

import com.ssafy.triptogether.syncaccount.data.response.SyncAccountsDetail;

public interface SyncAccountRepositoryCustom {
	List<SyncAccountsDetail> memberSyncAccountsLoad(long memberId);
	Boolean memberSyncAccountExist(long memberId);
}
