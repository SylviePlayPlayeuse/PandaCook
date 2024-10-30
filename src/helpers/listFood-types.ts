
export interface Food  {
    name: string,
    price: number
}

export const NO_RESULTS_MESSAGE = 'Oops, pas de résultats'

export interface Recipe {
    id: number;
    title: string;
    rating: number;
    description: string;
    ingredients: string[];
    prepTime: string;
}
