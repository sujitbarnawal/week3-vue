<script setup lang="ts">
import { useRouter } from 'vue-router';

    const router = useRouter()

    const navigate=()=>{
        router.push('/')
    }
</script>

<template>
    <div class="page-not-found">
        <img src="../assets/404.jpg" alt="page-not-found-img">
        <button @click="navigate">Go Back</button>
    </div>
</template>
<style scoped>
.page-not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 60px);
    width: 100vw;
    background-color: white;
}

button {
    padding: 20px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: crimson;
    color: white;
    font-size: 20px;
    cursor: pointer;

}
</style>