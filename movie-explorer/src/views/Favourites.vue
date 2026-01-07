<script setup lang="ts">
import type {Movie} from "../types/movieType.ts"
import {  ref } from 'vue';

import MovieCard from '@/components/MovieCard.vue';

const favourites = ref<Movie[]>(JSON.parse(localStorage.getItem('FAVOURITES')||'[]'))


</script>

<template>
  <div class="movie-list">
    <h1>My Favourite Movies</h1>
    <div class="movies-grid">
      <MovieCard v-for="movie in favourites" :key="movie.id" :movie="movie"/>
    </div>

  </div>
</template>

<style scoped>
    h1{
        text-align: center;
        margin-top: 10px;
    }

  .movie-list{
    display: flex;
    flex-direction: column;
    gap:20px;
    width: 90%;
    margin: auto;
  }
  .movies-grid{
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
  
   @media (min-width:650px) {
    .movies-grid{
      grid-template-columns: repeat(2,1fr);
    }
    
  }
  @media (min-width:970px) {
    .movies-grid{
      grid-template-columns: repeat(3,1fr);
    }
    
  }
  @media (min-width:1300px) {
    .movies-grid{
      grid-template-columns: repeat(4,1fr);
    }
    
  }

</style>
