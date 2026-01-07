<script setup lang="ts">

    import { useRouter } from "vue-router";
import type {Movie} from "../types/movieType.ts"

    const router = useRouter()

    const props = defineProps<{
        movie:Movie
    }>()

    const navigate=()=>{
        router.push(`/movie/${props.movie.id}`)
    }

</script>

<template>
    <div @click="navigate" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" :alt="movie.title" class="poster-image"/>
        <h3>{{ movie.title}}</h3>
        <p>Released:{{ movie.release_date }}</p>

    </div>
  
</template>

<style scoped>
    .poster-image {
    width: 300px;
    height: 250px;
    object-fit: cover; 
    border-radius: 10px 10px 0 0; 
}

.movie-card {
    border: 1px solid grey;
    margin-bottom: 20px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 300px;
    overflow: hidden;
    cursor:pointer;
}

h3{
    padding-left:10px ;
    padding-top: 10px;
}

p{
    padding-left: 10px;
    padding-bottom: 20px;
}

</style>
