package com.ssafy.triptogether.flashmob.service;

import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobListFindResponse;
import com.ssafy.triptogether.flashmob.data.response.SettlementsLoadResponse;

public interface FlashMobLoadService {
    AttendingFlashmobListFindResponse findAttendingFlashmobList(long memberId);

	SettlementsLoadResponse settlementsLoad(long memberId, long flashmobId);
}
