package com.ssafy.triptogether.auth.service;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthLoadService, AuthSaveService {
    @Override
    public Void pinVerify(PinVerifyRequest pinVerifyRequest) {
        return null;
    }
}
