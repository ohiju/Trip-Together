package com.ssafy.triptogether.plan.service;

import com.ssafy.triptogether.plan.data.response.DailyPlansResponse;
import com.ssafy.triptogether.plan.data.response.PlanDetailFindResponse;

public interface PlanLoadService {
    PlanDetailFindResponse findPlanDetail(long planId);

    DailyPlansResponse findPlans(long memberId);
}