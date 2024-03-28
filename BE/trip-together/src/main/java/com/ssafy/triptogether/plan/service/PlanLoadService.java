package com.ssafy.triptogether.plan.service;

import com.ssafy.triptogether.plan.data.response.DailyPlanListResponse;
import com.ssafy.triptogether.plan.data.response.PlanDetailFindResponse;

import java.util.List;

public interface PlanLoadService {
    PlanDetailFindResponse findPlanDetail(long planId);

    List<DailyPlanListResponse> findPlans(long memberId);
}
