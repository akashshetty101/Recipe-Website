<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all border-2 border-green-500 p-4">
            <router-link :to="{ name: 'MealDetails', params: { id: meal.idMeal } }">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
            </router-link>
            <div class="p-3"> 
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">
                    {{ limitWords(meal.strInstructions, 20) }}
                </p>
                <div class="flex items-center justify-between">
                    <YoutubeButton :href="meal.strYoutube">
                        Youtube
                    </YoutubeButton>
                </div>
            </div>
        </div> 
</template>

<script setup>

import YoutubeButton from './YoutubeButton.vue';
import { limitWords } from '../filters';

const {meal} = defineProps({
    meal: {
        required: true,
        type: Object
    }
})


</script>