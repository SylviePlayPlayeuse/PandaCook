<script setup lang="ts">
import ListFood from "@/components/ListFood.vue";
import {onMounted, ref} from "vue";
import type {Food} from "@/helpers/listFood-types";
import {getInitialFood} from "@/api/food.api";
import Loader from "@/components/Loader.vue";

const isLoading = ref<boolean>(false);
const initialList = ref<Food[]>([]);
const errorInitializeMessage = ref<string>('')

onMounted(async () => {
    isLoading.value = true;
    try {
        initialList.value = await getInitialFood();
    } catch (e) {
        errorInitializeMessage.value = "Ooops une erreur c'est produite lors de l'initialisation des ingrédients"
    } finally {
        isLoading.value = false;
    }
})

</script>

<template>
    <div>
        <h1>Home</h1>
        <Loader v-if="isLoading" />
        <span v-else-if="errorInitializeMessage">
          {{ errorInitializeMessage }}
      </span>
        <ListFood v-else :initialList="initialList"/>
    </div>
</template>
