package com.ssafy.triptogether.flashmob.service;

import com.ssafy.triptogether.flashmob.data.response.AttendingFlashmobListFindResponse;

public interface FlashMobLoadService {
    AttendingFlashmobListFindResponse findAttendingFlashmobList(long memberId);
}
