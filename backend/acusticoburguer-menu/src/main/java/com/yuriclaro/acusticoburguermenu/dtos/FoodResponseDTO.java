package com.yuriclaro.acusticoburguermenu.dtos;

import com.yuriclaro.acusticoburguermenu.entities.Food;

public record FoodResponseDTO(Long id, String title, String description, Double price, String image) {

    public FoodResponseDTO(Food food) {
        this(food.getId(),
                food.getTitle(),
                food.getDescription(),
                food.getPrice(),
                food.getImage());
    }
}
