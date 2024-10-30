import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OneRecipeView from "@/views/OneRecipeView.vue";
import AddRecipeView from "@/views/AddRecipeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: OneRecipeView
    },
    {
      path: '/addRecipe',
      name: 'addRecipe',
      component: AddRecipeView
    }
  ]
})

export default router
