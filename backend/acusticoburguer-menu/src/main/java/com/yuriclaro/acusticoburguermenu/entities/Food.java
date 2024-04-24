package com.yuriclaro.acusticoburguermenu.entities;


import com.yuriclaro.acusticoburguermenu.dtos.FoodResponseDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "menu")
@Table(name = "menu")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private Double price;
    private String image;

    public Food(FoodResponseDTO data) {
        this.title = data.title();
        this.description = data.description();
        this.price = data.price();
        this.image = data.image();
    }
}
