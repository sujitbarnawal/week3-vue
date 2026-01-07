<script setup lang="ts">
import FormContainer from './components/FormContainer.vue';


</script>

<template>

  <main class="app">
    <h1>Live Form Validator</h1>
    <FormContainer/>

  </main>
  
  
</template>

<style scoped>

  .app{
    background:white;
    padding: 20px;
    border-radius: 10px;
    min-width: 350px;
    /* height: 400px; */
    font-size: 18px;
  }
  h1{
    margin-bottom: 20px;
    font-weight: bolder;
  }

</style>
