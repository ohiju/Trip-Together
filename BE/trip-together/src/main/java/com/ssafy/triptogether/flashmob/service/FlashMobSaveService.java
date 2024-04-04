package com.ssafy.triptogether.flashmob.service;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.flashmob.data.request.ApplyFlashmobRequest;
import com.ssafy.triptogether.flashmob.data.request.SettlementSaveRequest;
import com.ssafy.triptogether.flashmob.data.response.RequestMemberResponse;

public interface FlashMobSaveService {
	void sendAttendanceRequest(long flashmobId, long memberId);

	void checkDeniedFlashmob(long flashmobId, long memberId);

	void cancelFlashmob(long flashmobId, long memberId);

	RequestMemberResponse applyFlashmob(long flashmobId, long memberId, ApplyFlashmobRequest applyFlashmobRequest, long masterId);

	void exitFlashmob(SecurityMember securityMember, long flashmobId);

	void settlementSave(long memberId, long flashmobId, SettlementSaveRequest settlementSaveRequest);

	void settlementSend(long memberId, long flashmobId, long settlementId, PinVerifyRequest pinVerifyRequest);

	void settlementDelete(long memberId, long flashmobId, long settlementId);
}
