<template>
    <div class="p-8 pb-0">
        <input 
        type="text" 
        v-model="keyword"
        class ="rounded border-2 border-grey-200 w-full" 
        placeholder="Search for Meals" 
        @change="searchMeals"
        />

    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl" >
            <router-link :to="{ name: 'MealDetails', params: { id: meal.idMeal } }">
                <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
            </router-link>
            <div class="p-3"> 
                <h3 class="font-semibold">{{ meal.strMeal }}</h3>
                <p class="mb-3">Description</p>
                <div class="flex items-center justify-between">
                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors">
                        Youtube
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import {ref} from 'vue';
import store from '../store';
import { computed } from "vue";
import {useRoute} from "vue-router";
import {onMounted } from 'vue';  

const route = useRoute(); 
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){
   store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value){
        searchMeals()
    }
})

</script>