<script setup lang="ts">
import type { Todo } from '../types/todo'
import TodoForm from './TodoForm.vue';

const props = defineProps<{
  todo: Todo
}>()

const emits =defineEmits<{
    (e:"toggle-todo",id:number):void
    (e:"delete-todo",id:number):void
}>()

function toggle(){
    emits('toggle-todo',props.todo.id)
}
function remove(){
    emits('delete-todo',props.todo.id)
}
</script>

<template>
   <li class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="toggle" />
    <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
    <button @click="remove">🗑️</button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem;
  border-bottom: 1px solid #eee;
}

.completed {
  text-decoration: line-through;
  color: #aaa;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
}

</style>
