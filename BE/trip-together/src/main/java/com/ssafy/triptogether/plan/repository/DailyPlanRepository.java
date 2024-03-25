package com.ssafy.triptogether.plan.repository;

import com.ssafy.triptogether.plan.domain.document.DailyPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DailyPlanRepository extends MongoRepository<DailyPlan, String> {
}
