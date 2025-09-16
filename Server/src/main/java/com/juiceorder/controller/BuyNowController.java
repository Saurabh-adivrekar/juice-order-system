package com.juiceorder.controller;

import com.juiceorder.model.BuyNowOrder;
import com.juiceorder.service.BuyNowService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/buy-now")
@CrossOrigin("*")
public class BuyNowController {

    @Autowired
    private BuyNowService buyNowService;

    @Operation(summary = "Place a Buy‑Now order (instant checkout)")
    @PostMapping
    public BuyNowOrder placeBuyNow(@RequestBody BuyNowOrder order) {
        return buyNowService.placeOrder(order);
    }

    @Operation(summary = "Get all Buy‑Now orders for one user")
    @GetMapping("/user/{userId}")
    public List<BuyNowOrder> listUserOrders(@PathVariable Long userId) {
        return buyNowService.getOrdersForUser(userId);
    }

    @Operation(summary = "Get one Buy‑Now order by ID")
    @GetMapping("/{id}")
    public BuyNowOrder getOne(@PathVariable Long id) {
        return buyNowService.getOrderById(id);
    }

    @Operation(summary = "Delete a Buy‑Now order by ID")
    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        buyNowService.deleteOrder(id);
    }
}
