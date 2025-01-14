<template>
    <header class ="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 transistion-colors hover:bg-olive-100 font-bold"> 
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transistion-colors hover:bg-olive-100 hover:text-white">
        Search meals
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transistion-colors hover:bg-olive-100 hover:text-white">
          Meals by Letter
        </router-link>
        <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transistion-colors hover:bg-olive-100 hover:text-white">
          Meals by ingredients
        </router-link>
        <router-link :to="{name: 'Chatbot'}" class="inline-flex items-center px-2 h-full transistion-colors hover:bg-olive-100 hover:text-white">
          Chatbot
        </router-link>
        
      </div>
    </header>
</template>