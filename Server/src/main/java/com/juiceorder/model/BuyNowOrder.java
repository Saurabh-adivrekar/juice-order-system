package com.juiceorder.model;

import jakarta.persistence.*;

@Entity
@Table(name = "buy_now_orders")
public class BuyNowOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long juiceId;
    private String juiceName;       // optional convenience
    private int quantity;
    private double totalPrice;

    // --- getters & setters ---
    public Long getId()          { return id; }
    public Long getUserId()      { return userId; }
    public Long getJuiceId()     { return juiceId; }
    public String getJuiceName() { return juiceName; }
    public int getQuantity()     { return quantity; }
    public double getTotalPrice(){ return totalPrice; }

    public void setUserId(Long userId)           { this.userId = userId; }
    public void setJuiceId(Long juiceId)         { this.juiceId = juiceId; }
    public void setJuiceName(String juiceName)   { this.juiceName = juiceName; }
    public void setQuantity(int quantity)        { this.quantity = quantity; }
    public void setTotalPrice(double totalPrice) { this.totalPrice = totalPrice; }
}
