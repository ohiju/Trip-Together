package com.ssafy.triptogether.plan.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ssafy.triptogether.plan.domain.document.DailyPlans;

public interface DailyPlansRepository extends CrudRepository<DailyPlans, String> {
	void deleteByPlanId(long planId);

	@Query("{planId :?0}")
	Optional<DailyPlans> findByPlanId(long planId);
}
