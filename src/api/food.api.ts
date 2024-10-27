import type {Food} from "@/helpers/listFood-types";

export const getInitialFood = (): Food[] => {
    return [
        { name: 'Banana', price: 10 },
        { name: 'Apple', price: 20 },
        { name: 'Orange', price: 30 },
    ]
}