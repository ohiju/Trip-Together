package com.ssafy.triptogether.plan.service;

import com.ssafy.triptogether.plan.data.response.AttractionDetailFindResponse;
import com.ssafy.triptogether.plan.data.response.PlanDetailFindResponse;

public interface PlanLoadService {
    PlanDetailFindResponse findPlanDetail(long planId);

    AttractionDetailFindResponse findAttractionDetail(long attractionId);
}
