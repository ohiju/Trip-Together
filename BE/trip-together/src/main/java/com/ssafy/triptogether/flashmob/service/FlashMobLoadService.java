package com.ssafy.triptogether.flashmob.service;

import com.ssafy.triptogether.flashmob.data.response.AttendeeReceiptsResponse;
import com.ssafy.triptogether.flashmob.data.response.AttendeesStatusResponse;
import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobListFindResponse;
import com.ssafy.triptogether.flashmob.data.response.FlashMobMembersLoadResponse;
import com.ssafy.triptogether.flashmob.data.response.SettlementsLoadResponse;

public interface FlashMobLoadService {
	AttendingFlashmobListFindResponse findAttendingFlashmobList(long memberId);

	SettlementsLoadResponse settlementsLoad(long memberId, long flashmobId);

	AttendeeReceiptsResponse receiptsLoad(long memberId, long flashmobId, long settlementId);

	AttendeesStatusResponse attendeesStatusLoad(long memberId, long flashmobId, long settlementId);

	FlashMobMembersLoadResponse flashmobMembersLoad(long memberId, long flashmobId);
}
