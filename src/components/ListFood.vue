<script setup lang="ts">
import {computed, ref} from "vue";
import {_debounce} from "@/tools/Tools";
import {type Food } from "@/helpers/listFood-types";
import {getInitialFood} from "@/api/food.api";

const initialFood = getInitialFood();

const listFood = ref<Food[]>(initialFood);
const foodResult = ref<Food[]>(initialFood);
const isLoading = ref<boolean>(false);

const debouncedSearch = _debounce((term: string) => {
    foodResult.value = listFood.value.filter((food) => {
        return food.name.toLowerCase().includes(term.toLowerCase());
    })
    isLoading.value = false;

}, 300);

const noResultsMessage = computed(() => {
    return foodResult.value.length === 0 ? 'Oops, pas de résultats' : ''
})

const handleInput = (event: Event) => {
    isLoading.value = true;
    const target = event.target as HTMLInputElement;
    debouncedSearch(target.value);
}

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
