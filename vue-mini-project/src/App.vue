<script setup>
import { ref } from "vue";
import SingleTodo from "./components/SingleTodo.vue";

const todos = ref([
  { id: 1, todo: "Complete Assignment" },
  { id: 2, todo: "Pay admission fee" },
  {id:3,todo:"Complete Internship"}
]);

function removeTodo(id){
    todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<template>
  <h1>MiniProject Sample Todo</h1>
  <SingleTodo v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo(todo.id)"/>
</template>

<style scoped></style>
