<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchMovies } from '../api/movieApi'
import MovieCard from '../components/MovieCard.vue'
import type { Movie } from '@/types/movieType'

const movies = ref<Movie[]>()
const loading = ref(true)


onMounted(async () => {
  movies.value = await fetchMovies()
  loading.value = false
})
</script>

<template>
  <div class="home-page">
    <h1>Welcome to Movie Explorer 🎬</h1>
    <p class="sub-title">Discover popular movies and explore details.</p>

    <h2>Popular Movies</h2>

    <div v-if="loading">Loading popular movies...</div>

    <div class="movies-grid" v-else>
      <MovieCard
        v-for="movie in movies?.slice(0,6)"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<style scoped>
  .home-page{
    width:90%;
    margin: auto;
  }
  h1,h2{
    text-align: center;
    margin-top: 10px;
  }
  .sub-title{
    text-align: center;
    margin-top: 10px;
  }
  h2{
    margin-top: 10px;
    margin-bottom: 10px;
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
