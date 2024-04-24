package com.yuriclaro.acusticoburguermenu.controllers;


import com.yuriclaro.acusticoburguermenu.entities.Food;
import com.yuriclaro.acusticoburguermenu.repository.FoodRepository;
import com.yuriclaro.acusticoburguermenu.dtos.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/acusticoburguer")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodResponseDTO data) {
        Food foodData = new Food(data);
        repository.save(foodData);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foodList = this.repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
}
