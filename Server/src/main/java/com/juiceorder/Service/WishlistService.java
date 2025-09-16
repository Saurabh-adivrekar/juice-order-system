package com.juiceorder.service;

import com.juiceorder.model.WishlistItem;
import java.util.List;

public interface WishlistService {
    WishlistItem addItem(WishlistItem item);
    List<WishlistItem> getWishlistByUser(Long userId);
    void removeItem(Long id);
}
