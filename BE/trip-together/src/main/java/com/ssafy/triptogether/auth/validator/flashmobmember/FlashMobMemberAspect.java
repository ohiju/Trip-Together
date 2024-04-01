package com.ssafy.triptogether.auth.validator.flashmobmember;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.ssafy.triptogether.flashmob.repository.MemberFlashMobRepository;
import com.ssafy.triptogether.global.exception.exceptions.category.ForbiddenException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@Aspect
public class FlashMobMemberAspect {
	private final MemberFlashMobRepository memberFlashMobRepository;

	@Before("@annotation(FlashMobMemberVerify)")
	public void flashMobMemberVerifyAdvice(JoinPoint joinPoint) throws Throwable {
		Object[] args = joinPoint.getArgs();
		Long memberId = (Long)args[0];
		Long flashMobId = (Long)args[1];

		memberFlashMobRepository.findMemberFlashmobByFlashmobIdAndMemberId(flashMobId, memberId)
			.orElseThrow(
				() -> new ForbiddenException("FlashMobMemberVerify", ErrorCode.FLASHMOB_MEMBER_FORBIDDEN)
			);
	}
}
