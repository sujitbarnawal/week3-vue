<script setup lang="ts">
import type { Todo } from '../types/todo'
import TodoItem from './TodoItem.vue'

defineProps<{
  todos: Todo[]
}>()

const emits = defineEmits<{
    (e:"toggle-todo",id:number):void
    (e:"delete-todo",id:number):void
}>()
</script>

<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="emits('toggle-todo', todo.id)"
      @delete-todo="emits('delete-todo', todo.id)"
    />
  </ul>
</template>

<style scoped>
.todo-list {
  margin-top: 1.5rem;
  padding: 0;
  list-style: none;
}
</style>
