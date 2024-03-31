package com.ssafy.triptogether.plan.data.response;

import java.util.ArrayList;
import java.util.List;

import lombok.Builder;

@Builder
public record DailyPlansResponse(
	Long comingUpPlanId,
	List<DailyPlanListResponse> plans
) {
}
