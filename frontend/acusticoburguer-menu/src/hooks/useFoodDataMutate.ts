import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData) => {
    try {
        const response = await axios.post(API_URL + '/food', data);
        return response;
    } catch (error) {
        throw error;
    }
}
