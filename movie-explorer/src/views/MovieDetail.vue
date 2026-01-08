<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchMovieById} from '../api/movieApi'
import type { Movie } from '@/types/movieType'


const route = useRoute()
const movie = ref<Movie | null>(null)
const loading = ref(true)
const favourites = ref<Movie[]>(JSON.parse(localStorage.getItem("FAVOURITES")||'[]'))



const isFavourite= computed(()=>{
  return favourites.value.some(fav=>fav.id===movie.value?.id)
})


const toggleFavourites=()=>{
  if(!movie.value) return
  if(isFavourite.value){
    favourites.value=favourites.value.filter(fav=>fav.id!==movie.value?.id)
  }else{
    favourites.value.push(movie.value)
  }
  localStorage.setItem("FAVOURITES",JSON.stringify(favourites.value))
  
}

onMounted(async () => {
  const id = Number(route.params.id)
  movie.value = await fetchMovieById(id)
  loading.value = false
})
</script>

<template>
  <div class="style-div" v-if="loading">Loading...</div>
  <div class="movie-detail" v-else-if="movie">
    <h1>{{ movie.title }}</h1>
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
    <p class="movie-overview">{{ movie.overview }}</p>
    <p class="date">Release: {{ movie.release_date }}</p>
    <button @click="toggleFavourites">{{isFavourite?"Remove from favourites":"Add to favourites"}}</button>
  </div>
  <div class="style-div" v-else>Movie not found(Invalid Id)</div>
</template>


<style scoped>
  h1{
    margin-top: 20px;
  }
  .movie-detail{
    width:90%;
    margin-top: 20px;
    margin: auto;
    
  }
  img{
    width: 300px;
    height: 250px;
    object-fit: cover; 
    border-radius: 10px; 
    margin-top: 10px;
  }
  .movie-overview{
    
    margin-top: 10px;
    font-size: 18px;
    text-align: justify;
  }

  .date{
    color: black;
    font-weight: bolder;
    font-size: 20px;
    margin-top: 10px;
  }

  button{
    padding: 10px;
    background: crimson;
    color: white;
    border: none;
    outline: none;
    margin-top: 10px;
    font-size:18px;
    border-radius: 10px;
    cursor: pointer;
  }

  .style-div{
    width:90%;
    margin: auto;
    font-size: 40px;
  }

  @media (min-width:1000px) {
    .movie-overview{
      width: 50%;
    }
  }


</style>
