package com.ssafy.triptogether.settlement.repository;

import com.ssafy.triptogether.settlement.domain.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<Receipt, Long> {
}
