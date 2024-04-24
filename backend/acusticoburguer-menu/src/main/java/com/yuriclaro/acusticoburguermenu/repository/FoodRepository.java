package com.yuriclaro.acusticoburguermenu.repository;

import com.yuriclaro.acusticoburguermenu.entities.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {
}
