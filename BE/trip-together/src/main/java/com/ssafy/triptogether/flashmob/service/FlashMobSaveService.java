package com.ssafy.triptogether.flashmob.service;

import com.ssafy.triptogether.flashmob.data.request.ApplyFlashmobRequest;

public interface FlashMobSaveService {
    void sendAttendanceRequest(long flashmobId, long memberId);

    void checkDeniedFlashmob(long flashmobId, long memberId);

    void cancelFlashmob(long flashmobId, long memberId);

    boolean applyFlashmob(long flashmobId, long memberId, ApplyFlashmobRequest applyFlashmobRequest, long masterId);
}
