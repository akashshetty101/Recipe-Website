<template>
    <div class="p-8 pb-0 text-olive-500">
      <h1 class="text-4xl font-bold mb-4">Trending Meals</h1>
    </div>
    <Meals :meals="meals" />
  </template>



<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';
import { ref } from 'vue';
import Meals from "../components/Meals.vue";



const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});

</script>