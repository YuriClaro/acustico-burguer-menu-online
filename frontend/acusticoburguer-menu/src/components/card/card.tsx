import "./card.css";
import { useState } from 'react';

interface CardProps {
    price: number,
    title: string,
    description: string,
    image: string,
    onAdd: () => void,
    onRemove: () => void,
}

export function Card({ price, image, title, description, onAdd, onRemove }: CardProps){

    return(
        <div className="card">
            <img src={image} alt={title}/>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price"><b>R${price.toFixed(2)}</b></p>
            </div>
            <div className="card-button">
                    <button onClick={onRemove} className="removeButton">-</button>
                    <button onClick={onAdd} className="addButton">+</button>

            </div>
        </div>
    )
}
