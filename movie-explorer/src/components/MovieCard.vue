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
        <p>{{ movie.release_date }}</p>

    </div>
  
</template>

<style scoped>
    .poster-image{
        height: 200px;
        width: 200px;
    }

</style>
