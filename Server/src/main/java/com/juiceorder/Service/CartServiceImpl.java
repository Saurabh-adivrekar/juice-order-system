package com.juiceorder.service;

import com.juiceorder.service.CartService;
import com.juiceorder.model.Cart;
import com.juiceorder.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> getCartItems() {
        return cartRepository.findAll();
    }

    @Override
    public void removeFromCart(Long id) {
        cartRepository.deleteById(id);
    }

    @Override
    public void clearCart() {
        cartRepository.deleteAll();
    }
}
