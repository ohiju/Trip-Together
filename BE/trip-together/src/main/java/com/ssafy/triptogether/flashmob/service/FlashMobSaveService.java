package com.ssafy.triptogether.flashmob.service;

public interface FlashMobSaveService {
    void sendAttendanceRequest(long flashmobId, long memberId);

    void checkDeniedFlashmob(long flashmobId, long memberId);

    void cancelFlashmob(long flashmobId, long memberId);
}
