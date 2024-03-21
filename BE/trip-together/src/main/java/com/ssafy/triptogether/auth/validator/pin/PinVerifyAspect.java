package com.ssafy.triptogether.auth.validator.pin;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.ssafy.triptogether.auth.data.request.PinVerifyRequest;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@Aspect
public class PinVerifyAspect {
	private final MemberRepository memberRepository;

	@Before("@annotation(PinVerify)")
	public void pinVerifyAdvice(JoinPoint joinPoint) throws Throwable {
		Object[] args = joinPoint.getArgs();
		Long memberId = (Long) args[0];
		PinVerifyRequest pinVerifyRequest = (PinVerifyRequest) args[1];

		Member member = memberRepository.findById(memberId)
			.orElseThrow(() -> new NotFoundException("PinVerify", ErrorCode.UNDEFINED_MEMBER, memberId));

		// Todo: inputPin 을 암호화한 후 member 의 PIN 과 비교
		// Todo: 일치하지 않는다면 예외 처리
	}
}
