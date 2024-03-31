package com.ssafy.triptogether.plan.domain.document;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "daily_plans")
public class DailyPlans {
	@Field("daily_plans")
	List<DailyPlan> dailyPlans;
	@Id
	private String id;
	@Field("plan_id")
	private Long planId;

	@Builder
	public DailyPlans(Long planId, List<DailyPlan> dailyPlans) {
		this.planId = planId;
		this.dailyPlans = dailyPlans;
	}

	public void updatePlans(List<DailyPlan> dailyPlans) {
		this.dailyPlans = dailyPlans;
	}

	public void updatePlansId(String id) {
		this.id = id;
	}

}
