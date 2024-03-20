package com.ssafy.triptogether.auth.service;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.global.data.response.ApiResponse;

public interface AuthLoadService {
    Void pinVerify(PinVerifyRequest pinVerifyRequest);
}
