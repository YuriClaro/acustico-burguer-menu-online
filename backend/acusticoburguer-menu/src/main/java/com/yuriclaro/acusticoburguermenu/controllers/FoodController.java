package com.yuriclaro.acusticoburguermenu.controllers;


import com.yuriclaro.acusticoburguermenu.entities.Food;
import com.yuriclaro.acusticoburguermenu.repository.FoodRepository;
import com.yuriclaro.acusticoburguermenu.dtos.FoodResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/acusticoburguer")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @Operation(summary = "Adicionando um novo item ao cardápio")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Item adicionado com sucesso!"),
            @ApiResponse(responseCode = "500", description = "Houve um erro ao adicionar o item, verifique as informações")
    })

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodResponseDTO data) {
        Food foodData = new Food(data);
        repository.save(foodData);
    }

    @Operation(summary = "Listando todos os itens do cardápio")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Itens listados com sucesso!"),
            @ApiResponse(responseCode = "500", description = "Houve um erro ao listas os itens")
    })

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foodList = this.repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
}
