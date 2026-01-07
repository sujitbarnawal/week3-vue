<script setup lang="ts">
import { ref } from 'vue';

    const searchQuery = ref("")
    const emit = defineEmits<{
        (e:'search-movie',query:string):void
    }>()

    const search =()=>{
        emit('search-movie',searchQuery.value)
    }

</script>

<template>
    <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search movies..."/>
        <button @click="search">Search </button>

    </div>
  
</template>

<style scoped>

</style>
