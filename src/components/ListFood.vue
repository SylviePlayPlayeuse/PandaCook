<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {_debounce} from "@/tools/Tools";
import {type Food, NO_RESULTS_MESSAGE} from "@/helpers/listFood-types";
import {getInitialFood} from "@/api/food.api";

const listFood = ref<Food[]>([]);
const foodResult = ref<Food[]>([]);
const isLoading = ref<boolean>(false);

const initializeFood = (newListFood: Food[]) => {
    listFood.value = newListFood;
    foodResult.value = newListFood;
}

const debouncedSearch = _debounce((term: string) => {
    foodResult.value = listFood.value.filter((food) => {
        return food.name.toLowerCase().includes(term.toLowerCase());
    })
    isLoading.value = false;

}, 300);

const noResultsMessage = computed(() => {
    return foodResult.value.length === 0 ? NO_RESULTS_MESSAGE : ''
})

const handleInput = (event: Event) => {
    isLoading.value = true;
    const target = event.target as HTMLInputElement;
    debouncedSearch(target.value);
}

onMounted(async () => {
    const initialFood: Food[] = await getInitialFood();
    initializeFood(initialFood)
})

</script>

<template>
    <div>
        <ul>
            <li v-for="food in listFood" :key="food.name">
                {{ food.name }} - {{ food.price }}
            </li>
        </ul>
        <input type="text" @input="handleInput" placeholder="...Filtrer"/>
        <div v-if="isLoading">
            is loading ...
        </div>
        <ul v-else>
            <li v-for="food in foodResult" :key="food.name">
                {{ food.name }} - {{ food.price }}
            </li>
        </ul>
        <p>
            {{ noResultsMessage }}
        </p>
    </div>
</template>
