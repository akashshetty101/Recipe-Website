<template>
      <div class="flex justify-center gap-2 margin-top-2">
          <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
              {{ letter }}
          </router-link>
      </div>

    <div v-if="meals.length">
        <Meals :meals="meals" />
    </div>
    <div v-else>
        No meals found for this letter.
    </div>

</template>

<script setup>

import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from "@vue/reactivity";
import store from '../store';
import Meals from '../components/Meals.vue';



const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter);
});


</script>