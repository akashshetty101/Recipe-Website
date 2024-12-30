<template>
    <div class="flex flex-col p-8">
        <input 
        type="text" 
        class ="rounded border-2 border-grey-200 w-full" 
        placeholder="Search for Meals" />

    </div>

</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';
import { ref } from 'vue';


const meals = computed(() => store.state.meals)
const ingredients = ref([]);

onMounted(async() => {
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response.data)
    ingredients.value = response.data

})

</script>