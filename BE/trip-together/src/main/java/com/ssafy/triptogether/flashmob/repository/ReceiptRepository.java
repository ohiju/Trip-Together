package com.ssafy.triptogether.flashmob.repository;

import com.ssafy.triptogether.flashmob.domain.document.Receipt;
import org.springframework.data.repository.CrudRepository;

public interface ReceiptRepository extends CrudRepository<Receipt, Long> {
}
