package com.juiceorder.service;

import com.juiceorder.service.JuiceService;
import com.juiceorder.model.Juice;
import com.juiceorder.repository.JuiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JuiceServiceImpl implements JuiceService {

    @Autowired
    private JuiceRepository juiceRepository;

    @Override
    public Juice addJuice(Juice juice) {
        return juiceRepository.save(juice);
    }

    @Override
    public List<Juice> getAllJuices() {
        return juiceRepository.findAll();
    }

    @Override
    public Juice getJuiceById(Long id) {
        return juiceRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteJuice(Long id) {
        juiceRepository.deleteById(id);
    }
}
