<script setup lang="ts">
import {computed, ref} from "vue";
import {_debounce} from "@/tools/Tools";
import {type Food, NO_RESULTS_MESSAGE} from "@/helpers/listFood-types";
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

const noResultsMessage = computed<string>(() => {
    return foodResult.value.length === 0 ? NO_RESULTS_MESSAGE : ''
})

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
        <p>
            {{ noResultsMessage }}
        </p>
    </div>
</template>
