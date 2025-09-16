package com.juiceorder.service;

import com.juiceorder.model.BuyNowOrder;

import java.util.List;

public interface BuyNowService {
    BuyNowOrder placeOrder(BuyNowOrder order);      // create new quick order
    List<BuyNowOrder> getOrdersForUser(Long userId);
    BuyNowOrder getOrderById(Long id);
    void deleteOrder(Long id);
}
