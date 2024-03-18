package com.ssafy.triptogether.auth.service;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;

public interface AuthLoadService {
	Void pinVerify(Long memberId, PinVerifyRequest pinVerifyRequest);
}
