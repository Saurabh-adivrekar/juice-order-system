package com.juiceorder.model;

import jakarta.persistence.*;

@Entity
@Table(name = "cart_items")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long juiceId;
    private String juiceName;
    private double price;
    private int quantity;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public Long getJuiceId() {
        return juiceId;
    }

    public void setJuiceId(Long juiceId) {
        this.juiceId = juiceId;
    }

    public String getJuiceName() {
        return juiceName;
    }

    public void setJuiceName(String juiceName) {
        this.juiceName = juiceName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
