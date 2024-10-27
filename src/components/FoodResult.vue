<script setup lang="ts">
import {type Food, NO_RESULTS_MESSAGE} from "@/helpers/listFood-types";
import {computed} from "vue";

const props = defineProps<{
    foodResult: Food[];
    isLoading: boolean;
    onInput: (event: Event) => void;
}>();

const noResultsMessage = computed<string>(() => {
    return props.foodResult.length === 0 ? NO_RESULTS_MESSAGE : ''
})

</script>

<template>
    <input type="text" @input="onInput" placeholder="...Filtrer"/>
    <Transition name="fade" mode="out-in">
        <div key="loading" v-if="isLoading">
            is loading ...
        </div>
        <template v-else>
            <ul key="result" v-if="foodResult.length > 0">
                <li v-for="food in foodResult" :key="food.name">
                    {{ food.name }} - {{ food.price }}
                </li>
            </ul>
            <p key="noResult" v-else>
                {{ noResultsMessage }}
            </p>
        </template>
    </Transition>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}


</style>