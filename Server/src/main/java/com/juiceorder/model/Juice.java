package com.juiceorder.model;

import jakarta.persistence.*;

@Entity
@Table(name = "juices")
public class Juice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String healthBenefit;
    private double price;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHealthBenefit() {
        return healthBenefit;
    }

    public void setHealthBenefit(String healthBenefit) {
        this.healthBenefit = healthBenefit;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
