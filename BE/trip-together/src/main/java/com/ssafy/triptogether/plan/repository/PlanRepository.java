package com.ssafy.triptogether.plan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.triptogether.plan.domain.Plan;
import com.ssafy.triptogether.plan.repository.query.PlanRepositoryCustom;

public interface PlanRepository extends JpaRepository<Plan, Long>, PlanRepositoryCustom {
}
