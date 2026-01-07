<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import type {Movie} from "../types/movieType.ts"
import { onMounted, ref } from 'vue';
import { fetchMovies } from '@/api/movieApi.ts';
import MovieCard from '@/components/MovieCard.vue';

const movies = ref<Movie[]>()
const loading = ref(false)

const loadMovies =async(query='')=>{
  loading.value=true
  movies.value = await fetchMovies(query)
  loading.value=false
}

onMounted(()=>loadMovies())



const handleSearch=(query:string)=>{
  loadMovies(query)  
}


</script>

<template>
  <div class="movie-list">
    <SearchBar @search-movie="handleSearch" />
    <div v-if="loading">Loading...</div>
    <div v-else class="movies-grid">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>

  </div>
</template>

<style scoped>

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
