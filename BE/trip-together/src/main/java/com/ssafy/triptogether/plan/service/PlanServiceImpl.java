package com.ssafy.triptogether.plan.service;

import static com.ssafy.triptogether.global.exception.response.ErrorCode.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.triptogether.attraction.domain.Region;
import com.ssafy.triptogether.attraction.repository.RegionRepository;
import com.ssafy.triptogether.attraction.utils.AttractionUtils;
import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.exceptions.category.ForbiddenException;
import com.ssafy.triptogether.global.exception.exceptions.category.NotFoundException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.member.utils.MemberUtils;
import com.ssafy.triptogether.plan.data.request.AttractionDetail;
import com.ssafy.triptogether.plan.data.request.PlanDetail;
import com.ssafy.triptogether.plan.data.request.PlansSaveRequest;
import com.ssafy.triptogether.plan.data.response.DailyPlanListResponse;
import com.ssafy.triptogether.plan.data.response.DailyPlanResponse;
import com.ssafy.triptogether.plan.data.response.DailyPlansResponse;
import com.ssafy.triptogether.plan.data.response.PlanDetailFindResponse;
import com.ssafy.triptogether.plan.domain.Plan;
import com.ssafy.triptogether.plan.domain.document.DailyPlan;
import com.ssafy.triptogether.plan.domain.document.DailyPlanAttraction;
import com.ssafy.triptogether.plan.domain.document.DailyPlans;
import com.ssafy.triptogether.plan.repository.DailyPlansRepository;
import com.ssafy.triptogether.plan.repository.PlanRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanSaveService, PlanLoadService {
    // Repository
    private final PlanRepository planRepository;
    private final MemberRepository memberRepository;
    private final RegionRepository regionRepository;
    private final DailyPlansRepository dailyPlansRepository;

    private static void planForbiddenCheck(Long memberId, Plan plan, String detailMessageKey) {
        if (!memberId.equals(plan.getMember().getId())) {
            throw new ForbiddenException(detailMessageKey, ErrorCode.FORBIDDEN_ACCESS_MEMBER);
        }
    }

    @Override
    public DailyPlansResponse findPlans(long memberId) {
        List<DailyPlanListResponse> list = planRepository.findPlansByMemberId(memberId);
        LocalDate now = LocalDate.now();
        // 현재 진행중 or 진행 할 플랜 아이디
        Optional<Long> comingUpPlanId = list.stream().filter(plan -> plan.endAt().isAfter(now)).map(DailyPlanListResponse::planId).findFirst();
        // 위의 아이디가 없다 (앞으로의 계획이 없다) -> 가장 최근의 지나간 플랜 아이디 --그마저도 없다-> null
        return DailyPlansResponse.builder()
            .comingUpPlanId(comingUpPlanId.orElse(list.size()==0?null:list.get(list.size()-1).planId()))
            .plans(list).build();
    }

    /**
     * 요청자의 여행 계획 저장
     *
     * @param memberId         요청자의 member_id
     * @param plansSaveRequest 요청자의 여행 계획
     * @return planId           저장된 plan의 id
     */
    @Transactional
    @Override
    public long plansSave(Long memberId, PlansSaveRequest plansSaveRequest) {
        Member member = MemberUtils.findByMemberId(memberRepository, memberId);
        Region startRegion = AttractionUtils.findByRegionId(regionRepository, plansSaveRequest.startRegionId());

        if (plansSaveRequest.endAt().isBefore(plansSaveRequest.startAt())) {
            throw new BadRequestException("PlanSave", ErrorCode.PLAN_DATE_BAD_REQUEST);
        }

        if (existOverlappingPlan(plansSaveRequest, member)) {
            throw new BadRequestException("PlanSave", ErrorCode.PLAN_SAVE_BAD_REQUEST);
        }

        Plan plan = planSave(plansSaveRequest, startRegion, member);
        if (plansSaveRequest.planDetails() != null) {
            planAttractionSave(plansSaveRequest.planDetails(), plan);
        }
        return plan.getId();
    }

    /**
     * 요청한 여행 계획 삭제
     *
     * @param memberId 요청자의 member_id
     * @param planId   삭제하고 싶은 여행 계획의 plan_id
     */
    @Transactional
    @Override
    public void planDelete(Long memberId, Long planId) {
        // find plan
        Plan plan = planFindById(planId, "PlanDelete");

        // validate auth
        planForbiddenCheck(memberId, plan, "PlanDelete");

        // delete daily plans & plan
        dailyPlansRepository.deleteByPlanId(plan.getId());
        planRepository.delete(plan);
    }

    @Transactional
    @Override
    public void planModify(Long memberId, Long planId, PlansSaveRequest plansSaveRequest) {
        Member member = MemberUtils.findByMemberId(memberRepository, memberId);
        Plan plan = planFindById(planId, "PlanModify");
        Region startRegion = AttractionUtils.findByRegionId(regionRepository, plansSaveRequest.startRegionId());

        if (plansSaveRequest.endAt().isBefore(plansSaveRequest.startAt())) {
            throw new BadRequestException("PlanModify", ErrorCode.PLAN_DATE_BAD_REQUEST);
        }

        if (existOverlappingPlan(plan.getId(), plansSaveRequest, member)) {
            throw new BadRequestException("PlanModify", ErrorCode.PLAN_SAVE_BAD_REQUEST);
        }
        plan.modify(plansSaveRequest);
        plan.setRegion(startRegion);

        DailyPlans dailyPlans = plansFindById(planId, "PlanModify");
        String id = dailyPlans.getId();

        planAttractionModify(plansSaveRequest.planDetails(), plan, id);
    }

    private DailyPlans plansFindById(Long planId, String detailMessageKey) {
        return dailyPlansRepository.findByPlanId(planId)
            .orElseThrow(
                () -> new NotFoundException(detailMessageKey, PLAN_NOT_FOUND)
            );
    }

    private Plan planFindById(Long planId, String detailMessageKey) {
        return planRepository.findById(planId)
            .orElseThrow(
                () -> new NotFoundException(detailMessageKey, PLAN_NOT_FOUND)
            );
    }

    private boolean existOverlappingPlan(PlansSaveRequest plansSaveRequest, Member member) {
        return planRepository.existOverlappingPlan(member, plansSaveRequest.startAt(), plansSaveRequest.endAt());
    }

    private boolean existOverlappingPlan(long planId, PlansSaveRequest plansSaveRequest, Member member) {
        return planRepository.existOverlappingPlanModify(planId, member, plansSaveRequest.startAt(), plansSaveRequest.endAt());
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

    private void planAttractionSave(List<PlanDetail> planDetails, Plan plan) {
        List<DailyPlan> dailyPlans = new ArrayList<>();

        // loop daily plans
        IntStream.range(0, planDetails.size()).forEach(dailyPlanIdx -> {
            PlanDetail planDetail = planDetails.get(dailyPlanIdx);
            List<DailyPlanAttraction> dailyPlanAttractions = new ArrayList<>();

            // loop attraction details
            IntStream.range(0, planDetail.attractionDetails().size()).forEach(attractionIdx -> {
                AttractionDetail attractionDetail = planDetail.attractionDetails().get(attractionIdx);

                // create attraction details
                DailyPlanAttraction dailyPlanAttraction = DailyPlanAttraction.builder()
                    .order(attractionIdx)
                    .attractionId(attractionDetail.attractionId())
                    .attractionName(attractionDetail.attractionName())
                    .avgRating(attractionDetail.avgRating())
                    .avgPrice(attractionDetail.avgPrice())
                    .thumbnailImageUrl(attractionDetail.thumbnailImageUrl())
                    .address(attractionDetail.address())
                    .build();
                dailyPlanAttractions.add(dailyPlanAttraction);
            });

            // create daily plans
            DailyPlan dailyPlan = DailyPlan.builder()
                .dailyEstimatedBudget(planDetail.dailyEstimatedBudget())
                .dailyPlanAttractions(dailyPlanAttractions)
                .order(planDetail.order())
                .build();
            dailyPlans.add(dailyPlan);
        });

        // create & save daily plan document
        DailyPlans plans = DailyPlans.builder().planId(plan.getId()).dailyPlans(dailyPlans).build();
        dailyPlansRepository.save(plans);
    }

    private void planAttractionModify(List<PlanDetail> planDetails, Plan plan, String id) {
        List<DailyPlan> dailyPlans = new ArrayList<>();

        // loop daily plans
        IntStream.range(0, planDetails.size()).forEach(dailyPlanIdx -> {
            PlanDetail planDetail = planDetails.get(dailyPlanIdx);
            List<DailyPlanAttraction> dailyPlanAttractions = new ArrayList<>();

            // loop attraction details
            IntStream.range(0, planDetail.attractionDetails().size()).forEach(attractionIdx -> {
                AttractionDetail attractionDetail = planDetail.attractionDetails().get(attractionIdx);

                // create attraction details
                DailyPlanAttraction dailyPlanAttraction = DailyPlanAttraction.builder()
                    .order(attractionIdx)
                    .attractionId(attractionDetail.attractionId())
                    .attractionName(attractionDetail.attractionName())
                    .avgRating(attractionDetail.avgRating())
                    .avgPrice(attractionDetail.avgPrice())
                    .thumbnailImageUrl(attractionDetail.thumbnailImageUrl())
                    .address(attractionDetail.address())
                    .build();
                dailyPlanAttractions.add(dailyPlanAttraction);
            });

            // create daily plans
            DailyPlan dailyPlan = DailyPlan.builder()
                .dailyEstimatedBudget(planDetail.dailyEstimatedBudget())
                .dailyPlanAttractions(dailyPlanAttractions)
                .order(planDetail.order())
                .build();
            dailyPlans.add(dailyPlan);
        });

        // create & save daily plan document
        DailyPlans plans = DailyPlans.builder().planId(plan.getId()).dailyPlans(dailyPlans).build();
        plans.updatePlansId(id);

        dailyPlansRepository.save(plans);
    }

    @Override
    public PlanDetailFindResponse findPlanDetail(long planId) {
        // find daily plans & plan detail
        Optional<DailyPlans> dailyPlans = dailyPlansRepository.findByPlanId(planId);
        DailyPlanResponse planDetail = planRepository.findDetailPlanById(planId)
            .orElseThrow(() -> new NotFoundException("PlanDetailFind", PLAN_NOT_FOUND));

        // set daily plans to plan detail & return
        return PlanDetailFindResponse.builder()
            .planId(planDetail.planId())
            .nation(planDetail.nation())
            .startRegionId(planDetail.startRegionId())
            .startRegion(planDetail.startRegion())
            .startRegionLatitude(planDetail.startRegionLatitude())
            .startRegionLongitude(planDetail.startRegionLongitude())
            .startAt(planDetail.startAt())
            .endAt(planDetail.endAt())
            .title(planDetail.title())
            .totalEstimatedBudget(planDetail.totalEstimatedBudget())
            .dailyPlans(dailyPlans.map(DailyPlans::getDailyPlans).orElse(null))
            .build();
    }
}
