package com.juiceorder.controller;

import com.juiceorder.model.WishlistItem;
import com.juiceorder.service.WishlistService;
import io.swagger.v3.oas.annotations.Operation;          // optional Swagger
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
@CrossOrigin("*")
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @Operation(summary = "Add juice to wishlist")
    @PostMapping
    public WishlistItem addToWishlist(@RequestBody WishlistItem item) {
        return wishlistService.addItem(item);
    }

    @Operation(summary = "Get wishlist for user")
    @GetMapping("/{userId}")
    public List<WishlistItem> getWishlist(@PathVariable Long userId) {
        return wishlistService.getWishlistByUser(userId);
    }

    @Operation(summary = "Remove item from wishlist")
    @DeleteMapping("/{id}")
    public void removeFromWishlist(@PathVariable Long id) {
        wishlistService.removeItem(id);
    }
}
