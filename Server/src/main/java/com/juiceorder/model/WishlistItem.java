package com.juiceorder.model;

import jakarta.persistence.*;

@Entity
@Table(name = "wishlist_items")
public class WishlistItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;   // which user saved it
    private Long juiceId;  // which juice

    // ------- getters / setters -------
    public Long getId()      { return id; }
    public Long getUserId()  { return userId; }
    public Long getJuiceId() { return juiceId; }

    public void setUserId(Long userId)   { this.userId = userId; }
    public void setJuiceId(Long juiceId) { this.juiceId = juiceId; }
}
