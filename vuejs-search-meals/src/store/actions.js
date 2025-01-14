import axiosClient from "../axiosClient.js";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
  .then(({ data }) => {
    // when meals is a string, sets it to an empty array
    const meals = Array.isArray(data.meals) ? data.meals : [];
    commit('setMealsByLetter', meals);
  })
  .catch(error => {
    console.error('API Error:', error);
    commit('setMealsByLetter', []); // go back to empty array when there is an error 
  });
}


export function searchMealsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}

