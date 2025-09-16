package com.juiceorder.controller;

import com.juiceorder.model.Juice;
import com.juiceorder.service.JuiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/juices")
@CrossOrigin("*") // Allow frontend to call this API (optional for now)
public class JuiceController {

    @Autowired
    private JuiceService juiceService;

    @PostMapping
    public Juice addJuice(@RequestBody Juice juice) {
        return juiceService.addJuice(juice);
    }

    @GetMapping
    public List<Juice> getAllJuices() {
        return juiceService.getAllJuices();
    }

    @GetMapping("/{id}")
    public Juice getJuiceById(@PathVariable Long id) {
        return juiceService.getJuiceById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteJuice(@PathVariable Long id) {
        juiceService.deleteJuice(id);
    }
}
