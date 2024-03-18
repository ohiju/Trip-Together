package com.ssafy.triptogether.plan.repository;

import com.ssafy.triptogether.plan.domain.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanRepository extends JpaRepository<Plan, Long> {
}
