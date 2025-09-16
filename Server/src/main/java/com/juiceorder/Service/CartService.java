package com.juiceorder.service;

import com.juiceorder.model.Cart;
import java.util.List;

public interface CartService {
    Cart addToCart(Cart cart);
    List<Cart> getCartItems();
    void removeFromCart(Long id);
    void clearCart();
}
