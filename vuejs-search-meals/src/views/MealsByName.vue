<template>
    <div class="p-8 pb-0 mb-3">
        <input 
        type="text" 
        v-model="keyword"
        class ="rounded border-2 bg-white border-grey-200 w-full" 
        placeholder="Search for Meals" 
        @change="searchMeals"
        />

    </div>
    <Meals :meals="meals" /> 

</template>


<script setup>
import {ref} from 'vue';
import store from '../store';
import { computed } from "vue";
import {useRoute} from "vue-router";
import {onMounted } from 'vue';  
import Meals from '../components/Meals.vue';

const route = useRoute(); 
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){
    if(keyword.value){ 
        store.dispatch('searchMeals', keyword.value);
    } 
    else { 
        store.commit('setSearchedMeals', []);
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value){
        searchMeals()
    }
})

</script>