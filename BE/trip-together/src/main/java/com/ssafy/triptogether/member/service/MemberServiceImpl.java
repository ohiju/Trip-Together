package com.ssafy.triptogether.member.service;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.auth.provider.CookieProvider;
import com.ssafy.triptogether.auth.provider.JwtTokenProvider;
import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.auth.validator.pin.PinVerify;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.exceptions.category.UnAuthorizedException;
import com.ssafy.triptogether.global.exception.exceptions.category.ValidationException;
import com.ssafy.triptogether.infra.twinklebank.TwinkleBankClient;
import com.ssafy.triptogether.infra.twinklebank.data.request.TwinkleBankLogoutRequest;
import com.ssafy.triptogether.infra.twinklebank.data.response.TwinkleMemberInfoResponse;
import com.ssafy.triptogether.member.data.request.PinSaveRequest;
import com.ssafy.triptogether.member.data.request.PinUpdateRequest;
import com.ssafy.triptogether.member.data.request.ProfileUpdateRequest;
import com.ssafy.triptogether.member.data.response.ProfileFindResponse;
import com.ssafy.triptogether.member.data.response.ProfileUpdateResponse;
import com.ssafy.triptogether.member.data.response.ReissueResponse;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.member.utils.MemberUtils;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import static com.ssafy.triptogether.global.data.response.StatusCode.SUCCESS_REISSUE;
import static com.ssafy.triptogether.global.exception.response.ErrorCode.*;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class MemberServiceImpl implements MemberSaveService, MemberLoadService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final StringRedisTemplate redisTemplate;
    private final JwtTokenProvider jwtTokenProvider;
    private final TwinkleBankClient twinkleBankClient;
    private final CookieProvider cookieProvider;

    @Transactional
    @Override
    public void reportMember(long memberId) {
        // find member
        Member member = MemberUtils.findByMemberId(memberRepository, memberId);

        // report member
        member.report();
    }

    @Transactional
    @Override
    public ProfileUpdateResponse updateProfile(long memberId, ProfileUpdateRequest profileUpdateRequest) {
        // find member
        Member member = MemberUtils.findByMemberId(memberRepository, memberId);

        // update member
        member.update(profileUpdateRequest);

        // create response & return
        return ProfileUpdateResponse.builder()
            .memberId(member.getId())
            .imageUrl(member.getImageUrl())
            .nickname(member.getNickname())
            .description(member.getDescription())
            .build();
    }

    @Transactional
    @Override
    public void savePin(long memberId, PinSaveRequest pinSaveRequest) {
        // validate request
        if (!pinSaveRequest.pinNum().equals(pinSaveRequest.pinNumCheck())) {
            throw new ValidationException("PinSave", PIN_CHECK_MISS_MATCH, pinSaveRequest.pinNum(),
                pinSaveRequest.pinNumCheck());
        }

        // find member
        Member member = MemberUtils.findByMemberId(memberRepository, memberId);

        // validate member
        if (member.getPinNum() != null) {
            throw new ValidationException("PinSave", PIN_ALREADY_EXISTS, memberId);
        }

        // save pin
        String encodedPinNum = passwordEncoder.encode(pinSaveRequest.pinNum());
        member.savePin(encodedPinNum);
    }

    @PinVerify
    @Transactional
    @Override
    public void updatePin(long memberId, PinVerifyRequest pinVerifyRequest, PinUpdateRequest pinUpdateRequest) {
        // validate request if miss match
        if (!pinUpdateRequest.newPinNum().equals(pinUpdateRequest.newPinNumCheck())) {
            throw new ValidationException("PinUpdate", PIN_CHECK_MISS_MATCH, pinUpdateRequest.newPinNum(),
                pinUpdateRequest.newPinNumCheck());
        }

        // find member
        Member member = MemberUtils.findByMemberId(memberRepository, memberId);

        // validate member
        if (member.getPinNum() == null) {
            throw new NotFoundException("PinUpdate", PIN_NOT_EXISTS, memberId);
        }

        // update pin
        String encodedPinNum = passwordEncoder.encode(pinUpdateRequest.newPinNum());
        member.savePin(encodedPinNum);
    }

    @Override
    public void logout(SecurityMember securityMember, String accessToken) {
        // logout from twinkle bank
        TwinkleBankLogoutRequest twinkleBankLogoutRequest = TwinkleBankLogoutRequest.builder()
            .memberUuid(securityMember.getUuid())
            .build();
        twinkleBankClient.bankLogout(twinkleBankLogoutRequest);

        // delete refresh token
        if (redisTemplate.opsForValue().get("refresh:" + securityMember.getId()) != null) {
            redisTemplate.delete("refresh:" + securityMember.getId());
        }

        // add access token to a blacklist
        redisTemplate.opsForValue().set(
            "blacklist:" + accessToken, accessToken,
            jwtTokenProvider.getACCESS_TOKEN_EXPIRE_TIME(),
            TimeUnit.MILLISECONDS
        );
    }

    @Transactional
    @Override
    public Member saveMember(TwinkleMemberInfoResponse twinkleMemberInfoResponse) {

        Member member = Member.builder()
            .username(twinkleMemberInfoResponse.name())
            .uuid(twinkleMemberInfoResponse.memberUuid())
            .nickname(twinkleMemberInfoResponse.name())
            .gender(twinkleMemberInfoResponse.gender())
            .birth(twinkleMemberInfoResponse.birth())
            .reportCount(0)
            .build();

        member = memberRepository.save(member);

        return member;
    }

    @Override
    public ProfileFindResponse findProfile(long memberId) {
        // find member & return
        return memberRepository.findProfileByMemberId(memberId)
            .orElseThrow(() -> new NotFoundException("ProfileFind", UNDEFINED_MEMBER, memberId));
    }

    @Override
    public ResponseEntity<ApiResponse<ReissueResponse>> reissue(String refreshToken) {
        // 1. refreshtoken이 null이 아닌지 확인한다
        if (refreshToken == null) {
            throw new NotFoundException("MemberServiceImpl", REFRESH_NOT_FOUND);
        }

        // 2. 존재한다면 복호화 후 claims 객체를 파싱해온다
        Claims claims = jwtTokenProvider.parseClaims(refreshToken);
        // 3. claims에서 저장한 id를 가져온다
        Long id = Long.valueOf(claims.get("id").toString());

        // refresh token이 만료된 경우
        if (isRefreshTokenExpired(id)) {
            throw new UnAuthorizedException("MemberServiceImpl : ", EXPIRED_TOKEN);
        }

        // 비정상적인 접근으로 refresh token이 일치하지 않는 경우
        if (!isValidRefreshToken(refreshToken, id)) {
            throw new UnAuthorizedException("MemberServiceImpl : ", UNAUTHORIZED_REFRESH);
        }

        // 6. 동일하다면 access token을 생성해 전달한다.
        Member member = MemberUtils.findByMemberId(memberRepository, id);

        Authentication authentication =
            new UsernamePasswordAuthenticationToken(member.getId(), member.getUuid(),
                Collections.singleton(new SimpleGrantedAuthority("AUTHORITY")));

        Map<String, String> tokenMap = jwtTokenProvider.generateToken(member.getId(), member.getUuid(), authentication);
        // refresh token redis에 저장
        saveTokenRedis(member, tokenMap);

        // accessToken 까서 created at, expires in 빼서 넣어주기
        claims = jwtTokenProvider.parseClaims(tokenMap.get("access").substring(7));
        Long createdAt = (Long) claims.get("created");
        Integer expiresIn = (Integer) claims.get("expiresIn");

        ReissueResponse response = ReissueResponse.builder()
            .access(tokenMap.get("access"))
            .expiresIn(expiresIn)
            .createdAt(createdAt).build();

        String newRefreshToken = tokenMap.get("refresh");
        // refresh token은 헤더에 쿠키에 다시 넣어준다
        ResponseCookie newCookie = cookieProvider.createCookie(newRefreshToken);

        // 쿠키를 담을 헤더 생성
        HttpHeaders headers = cookieProvider.addCookieHttpHeaders(newCookie);
        // ApiResponse 객체 생성
        ApiResponse<ReissueResponse> apiResponse = ApiResponse.<ReissueResponse>builder()
            .status(SUCCESS_REISSUE.getStatus())
            .message(SUCCESS_REISSUE.getMessage())
            .data(response)
            .build();

        return ResponseEntity
            .status(HttpStatus.OK)
            .headers(headers)
            .body(apiResponse);
    }

    private boolean isRefreshTokenExpired(Long id) {
        return redisTemplate.opsForValue().get("refresh:" + id) == null;
    }

    private boolean isValidRefreshToken(String refreshToken, Long id) {
        return refreshToken.equals(redisTemplate.opsForValue().get("refresh:" + id));
    }

    private void saveTokenRedis(Member member, Map<String, String> tokenMap) {
        redisTemplate.opsForValue()
            .set("refresh:" + member.getId(), tokenMap.get("refresh"),
                jwtTokenProvider.getREFRESH_TOKEN_EXPIRE_TIME(), TimeUnit.MILLISECONDS);
    }

}
