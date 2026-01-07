<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMovieById} from '../api/movieApi'
import type { Movie } from '@/types/movieType'

const route = useRoute()
const movie = ref<Movie | null>(null)
const loading = ref(true)

onMounted(async () => {
  const id = Number(route.params.id)
  movie.value = await fetchMovieById(id)
  loading.value = false
})
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="movie">
    <h1>{{ movie.title }}</h1>
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
    <p>{{ movie.overview }}</p>
    <p>Release: {{ movie.release_date }}</p>
  </div>
  <div v-else>Movie not found</div>
</template>


<style scoped>

</style>
