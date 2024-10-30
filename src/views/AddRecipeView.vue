<template>
    <div class="add-recipe-view">
        <v-form @submit.prevent>
            <v-text-field
                class="text-field"
                hide-details="auto"
                label="Main input"
            ></v-text-field>
            <v-textarea label="Label"></v-textarea>
            <v-btn class="button" type="submit" block>
                Valider
            </v-btn>
        </v-form>
    </div>
</template>
<style lang="scss" scoped>
.add-recipe-view {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    .text-field {
        width: 300px;
        margin-bottom: 1rem;
    }


}
</style>