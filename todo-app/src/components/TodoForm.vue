<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const emit=defineEmits<{
    (e:'add-todo',title:string):void
}>()

function submitForm(){
    emit('add-todo',title.value)
    title.value=""

}
</script>

<template>
  <form class="todo-form" @submit.prevent="submitForm">
    <input
      v-model="title"
      type="text"
      placeholder="Add a new todo"
    />
    <button type="submit">Add</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  gap: 0.5rem;
}

input {
  flex: 1;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid #ddd;
}

button {
  padding: 0.6rem 1rem;
  border: none;
  background: #4f46e5;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
</style>
