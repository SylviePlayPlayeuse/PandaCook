<script setup lang="ts">
import {ref} from "vue";
import {_debounce} from "@/tools/Tools";
import {type Food } from "@/helpers/listFood-types";
import FoodResult from "@/components/FoodResult.vue";

const props = defineProps<{
    initialList: Food[],
}>();

const isLoading = ref<boolean>(false);
const listFood = ref<Food[]>(props.initialList);
const foodResult = ref<Food[]>(props.initialList);

const debouncedSearch = _debounce((term: string) => {
    foodResult.value = listFood.value.filter((food) => {
        return food.name.toLowerCase().includes(term.toLowerCase());
    })
    isLoading.value = false;

}, 300);

const handleInput = (event: Event): void => {
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
        <FoodResult
            :foodResult="foodResult"
            :isLoading="isLoading"
            :onInput="handleInput"
        />
    </div>
</template>
