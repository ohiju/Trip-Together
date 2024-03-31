package com.ssafy.triptogether.flashmob.repository;

import org.springframework.data.repository.CrudRepository;

import com.ssafy.triptogether.flashmob.domain.document.Receipt;

public interface ReceiptRepository extends CrudRepository<Receipt, Long> {
}
