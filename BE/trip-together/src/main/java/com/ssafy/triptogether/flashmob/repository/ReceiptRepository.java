package com.ssafy.triptogether.flashmob.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.ssafy.triptogether.flashmob.domain.document.Receipt;

public interface ReceiptRepository extends CrudRepository<Receipt, Long> {
	Optional<Receipt> findByMemberSettlementId(long memberSettlementId);
}
