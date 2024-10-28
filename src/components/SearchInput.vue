<script setup lang="ts">
defineProps<{
    onInput: (event: Event) => void;
}>();
</script>

<template>
    <input type="text" @input="onInput" placeholder="...Filtrer"/>
</template>

<style scoped>

</style>