<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { Todo } from './types/todo';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';


  const todos = ref<Todo[]>(JSON.parse(localStorage.getItem('todos') ||'[]'))

  watch(todos,(newTodos)=>{
    localStorage.setItem('todos',JSON.stringify(newTodos))
  },{deep:true})

  const completedTodos = computed(()=>todos.value.filter(todo=>todo.completed).length)
  const pendingTodos = computed(()=>todos.value.filter(todo=>!todo.completed).length)


  function addTodo(title:string){
    if(!title.trim()) return
    todos.value.push({
      id: Date.now(),
      title,
      completed:false
    })
  }

  function toggleTodo(id:number){
    const todo=todos.value.find(t=>t.id===id)
    if(todo){
      todo.completed=!todo.completed
    }
  }

  function deleteTodo(id:number){
    todos.value=todos.value.filter(todo=>todo.id!==id)
  }

</script>

<template>
  <main class="app">
    <h1>📝 Todo App</h1>
    <TodoForm @add-todo="addTodo"/>
    <TodoList :todos="todos" @toggle-todo="toggleTodo" @delete-todo="deleteTodo" />
    <footer class="stats">
      <p>Completed: {{ completedTodos }} | Pending: {{ pendingTodos }}</p>
    </footer>
  </main>
  
</template>

<style scoped>
.app {
  max-width: 480px;
  margin: 3rem auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.stats {
  margin-top: 1rem;
  text-align: center;
  color: #555;
  font-weight: 500;
}
</style>
