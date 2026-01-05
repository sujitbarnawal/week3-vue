<script setup lang="ts">
import ExpenseContainer from './components/ExpenseContainer.vue';


</script>

<template>
  <main class="app">
    <h1>Expense Tracker</h1>
    <ExpenseContainer/>
  </main>
  
</template>


<style scoped>

  .app{
    background-color: white;
    width: 350px;
    padding: 20px;
    border-radius: 10px;
  }
  h1{
    font-weight: bolder;
    margin-bottom: 20px;
  }
</style>