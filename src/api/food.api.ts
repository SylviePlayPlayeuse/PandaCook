import type {Food} from "@/helpers/listFood-types";
import axios from 'axios';
import recipesData from '@/fakeData/recipes.json';


export const getInitialFood = (): Promise<Food[]> => {
    return Promise.resolve(
        [
            { name: 'Banana', price: 10 },
            { name: 'Apple', price: 20 },
            { name: 'Orange', price: 30 },
        ]
    )
}


const API_URL = 'http://localhost:3000/fakeData/recipes.json';

export const getRecipes = async () => {
    try {
        return Promise.resolve(recipesData.recipes);
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes :", error);
        throw error;
    }
};
