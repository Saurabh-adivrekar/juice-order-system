package com.juiceorder.repository;

import com.juiceorder.model.Juice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JuiceRepository extends JpaRepository<Juice, Long> {
}
