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
    .search-bar {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

input {
    padding: 13px;
    outline: none;
    border-radius: 20px 0 0 20px;
    border: 1px solid grey;
    border-right: none; 
    min-width: 250px;
    width: 25%;
    font-size: 18px;
}

button {
    padding: 13px;
    outline: none;
    border-radius: 0 20px 20px 0;
    border: 1px solid grey;
    border-left: none; /* Move this AFTER the border declaration */
    background: crimson;
    color: white;
    min-width: 80px;
    width: 5%;
    cursor: pointer;
}

</style>
