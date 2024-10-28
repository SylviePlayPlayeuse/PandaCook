<script setup lang="ts">
import {type Food, NO_RESULTS_MESSAGE} from "@/helpers/listFood-types";
import {computed} from "vue";
import SearchInput from "@/components/SearchInput.vue";

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
    <SearchInput :onInput="onInput" />
    <Transition name="fade" mode="out-in">
        <v-card
            class="mx-auto"
            max-width="300"
        >
            <v-list-subheader>Résultat</v-list-subheader>
            <div key="loading" v-if="isLoading">
                Chargement en cours ...
            </div>
            <template v-else>
                <section v-if="foodResult.length > 0" aria-label="Résultats de la recherche">
                        <v-list
                            :items="foodResult"
                            item-title="name"
                            item-value="name"
                        >
                            <v-list-item v-for="food in foodResult" :key="food.name">
                                <v-list-item-title v-text="food.name" />
                                <v-list-item-title>{{ food.price }}€</v-list-item-title>
                            </v-list-item>
                        </v-list>
                </section>
                <section v-else aria-label="Aucun résultat">
                    <p>
                        {{ noResultsMessage }}
                    </p>
                </section>
            </template>
        </v-card>
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