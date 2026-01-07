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
    <p>Discover popular movies and explore details.</p>

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

<style>
  .home-page{
    width:90%;
    margin: auto;
  }
</style>
