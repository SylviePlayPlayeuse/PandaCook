<script setup lang="ts">
import type {Food} from "@/helpers/listFood-types";

defineProps<{
    foodResult: Food[];
    isLoading: boolean;
    onInput: (event: Event) => void;
}>();

</script>

<template>
    <input type="text" @input="onInput" placeholder="...Filtrer"/>
    <div v-if="isLoading">
        is loading ...
    </div>
    <ul v-else>
        <li v-for="food in foodResult" :key="food.name">
            {{ food.name }} - {{ food.price }}
        </li>
    </ul>
</template>