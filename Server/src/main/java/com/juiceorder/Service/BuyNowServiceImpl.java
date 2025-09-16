package com.juiceorder.service;

import com.juiceorder.service.BuyNowService;
import com.juiceorder.model.BuyNowOrder;
import com.juiceorder.model.Juice;
import com.juiceorder.repository.BuyNowRepository;
import com.juiceorder.repository.JuiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyNowServiceImpl implements BuyNowService {

    @Autowired private BuyNowRepository buyNowRepo;
    @Autowired private JuiceRepository  juiceRepo;   // to fetch price/name

    @Override
    public BuyNowOrder placeOrder(BuyNowOrder order) {

        // fetch juice to fill price & name (basic validation)
        Juice juice = juiceRepo.findById(order.getJuiceId()).orElseThrow(
                () -> new RuntimeException("Juice not found")
        );

        order.setJuiceName(juice.getName());
        order.setTotalPrice(juice.getPrice() * order.getQuantity());

        return buyNowRepo.save(order);
    }

    @Override
    public List<BuyNowOrder> getOrdersForUser(Long userId) {
        return buyNowRepo.findByUserId(userId);
    }

    @Override
    public BuyNowOrder getOrderById(Long id) {
        return buyNowRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteOrder(Long id) {
        buyNowRepo.deleteById(id);  // 👈 Delete logic
    }
}
