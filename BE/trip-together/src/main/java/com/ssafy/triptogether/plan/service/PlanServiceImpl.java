package com.ssafy.triptogether.plan.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.triptogether.attraction.domain.Attraction;
import com.ssafy.triptogether.attraction.domain.Region;
import com.ssafy.triptogether.attraction.repository.AttractionRepository;
import com.ssafy.triptogether.attraction.repository.RegionRepository;
import com.ssafy.triptogether.attraction.utils.AttractionUtils;
import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.member.utils.MemberUtils;
import com.ssafy.triptogether.plan.data.request.PlanDetail;
import com.ssafy.triptogether.plan.data.request.PlansSaveRequest;
import com.ssafy.triptogether.plan.domain.Plan;
import com.ssafy.triptogether.plan.domain.PlanAttraction;
import com.ssafy.triptogether.plan.repository.PlanAttractionRepository;
import com.ssafy.triptogether.plan.repository.PlanRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanSaveService {
	// Repository
	private final PlanRepository planRepository;
	private final PlanAttractionRepository planAttractionRepository;
	private final MemberRepository memberRepository;
	private final RegionRepository regionRepository;
	private final AttractionRepository attractionRepository;

	/**
	 * 요청자의 여행 계획 저장
	 * @param memberId 요청자의 member_id
	 * @param plansSaveRequest 요청자의 여행 계획
	 */
	@Transactional
	@Override
	public void plansSave(Long memberId, PlansSaveRequest plansSaveRequest) {
		Member member = MemberUtils.findByMemberId(memberRepository, memberId);
		Region startRegion = AttractionUtils.findByRegionId(regionRepository, plansSaveRequest.startRegionId());

		if (existOverlappingPlan(plansSaveRequest, member)) {
			throw new BadRequestException("PlanSave", ErrorCode.PLAN_SAVE_BAD_REQUEST);
		}

		Plan plan = planSave(plansSaveRequest, startRegion, member);
		plansSaveRequest.planDetails()
			.forEach(planDetail -> {
				List<Attraction> attractions = planDetail.attractions().stream()
					.map(attraction -> AttractionUtils.findByAttractionId(attractionRepository,
						attraction.attractionId()))
					.toList();

				attractions.forEach(attraction -> {
					planAttractionSave(planDetail, attraction, plan);
				});
			});
	}

	private boolean existOverlappingPlan(PlansSaveRequest plansSaveRequest, Member member) {
		return planRepository.existOverlappingPlan(member, plansSaveRequest.startAt(), plansSaveRequest.endAt());
	}

	private void planAttractionSave(PlanDetail planDetail, Attraction attraction, Plan plan) {
		PlanAttraction planAttraction = PlanAttraction.builder()
			.sequence(planDetail.sequence())
			.dailyEstimatedBudget(planDetail.dailyEstimatedBudget())
			.attraction(attraction)
			.plan(plan)
			.build();
		planAttractionRepository.save(planAttraction);
	}

	private Plan planSave(PlansSaveRequest plansSaveRequest, Region startRegion, Member member) {
		Plan plan = Plan.builder()
			.title(plansSaveRequest.title())
			.startAt(plansSaveRequest.startAt())
			.endAt(plansSaveRequest.endAt())
			.estimatedBudget(plansSaveRequest.estimatedBudget())
			.region(startRegion)
			.member(member)
			.build();
		return planRepository.save(plan);
	}
}
