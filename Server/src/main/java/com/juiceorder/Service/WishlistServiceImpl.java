package com.juiceorder.service;

import com.juiceorder.service.WishlistService;
import com.juiceorder.model.WishlistItem;
import com.juiceorder.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishlistServiceImpl implements WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    @Override
    public WishlistItem addItem(WishlistItem item) {
        return wishlistRepository.save(item);
    }

    @Override
    public List<WishlistItem> getWishlistByUser(Long userId) {
        return wishlistRepository.findByUserId(userId);
    }

    @Override
    public void removeItem(Long id) {
        wishlistRepository.deleteById(id);
    }
}
