<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
      <MealItem 
        v-for="meal in meals" 
        :key="meal.idMeal" 
        :meal="meal" 
      />
    </div>
  
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
      There are no meals!
    </div>
  </template>
  
  <script setup>
  import MealItem from '../components/MealItem.vue';
  
  const { meals } = defineProps({
    meals: {
      required: true,
      type: Array,
      default: () => []
    }
  });
  </script>
  
  <style scoped>
  /* hover for cards */
  .grid div:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
  </style>
  