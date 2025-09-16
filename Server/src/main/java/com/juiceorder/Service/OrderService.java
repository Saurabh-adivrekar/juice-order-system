package com.juiceorder.service;

import com.juiceorder.model.Order;
import java.util.List;

public interface OrderService {
    Order placeOrder(Order order);
    List<Order> getAllOrders();
    Order getOrderById(Long id);
    void deleteOrder(Long id);
}
