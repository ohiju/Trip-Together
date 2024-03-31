package com.ssafy.triptogether.plan.data.response;

import java.util.ArrayList;

import lombok.Builder;

@Builder
public record DailyPlansResponse(
	Long comingUpPlanId,
	ArrayList<DailyPlanListResponse> plans
) {
}
