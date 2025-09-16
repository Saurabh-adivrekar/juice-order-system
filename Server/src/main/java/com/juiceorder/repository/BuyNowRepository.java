package com.juiceorder.repository;

import com.juiceorder.model.BuyNowOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BuyNowRepository extends JpaRepository<BuyNowOrder, Long> {
    List<BuyNowOrder> findByUserId(Long userId);
}
