package com.juiceorder.service;

import com.juiceorder.model.Juice;
import java.util.List;

public interface JuiceService {
    Juice addJuice(Juice juice);
    List<Juice> getAllJuices();
    Juice getJuiceById(Long id);
    void deleteJuice(Long id);
}
