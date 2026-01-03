<script setup>
import { ref } from "vue";
const message = ref("Hello Bro");
const count = ref(0);
const isLoggedIn=ref(false)
const users=ref([
  {id:0, name:"sujit",email:"sujit@gmail.com"},
  {id:1, name:"sujit1",email:"sujit1@gmail.com"},
  {id:2, name:"sujit2",email:"sujit2@gmail.com"},
  {id:3, name:"sujit3",email:"sujit3@gmail.com"}
])

const msg=ref("Hello! Sujit")

function changeMessage() {
  if (message.value === "Welcome to VueJS") {
    message.value = "Hello Bro";
  } else {
    message.value = "Welcome to VueJS";
  }
}

const toggleLogin=()=>{
  console.log(isLoggedIn.value)
  isLoggedIn.value=!isLoggedIn.value
}
</script>

<template>
  <h1>Vue JS day-1</h1>
  <div class="message">{{ message }}</div>
  <button @click="changeMessage">Change message</button>

  <div class="counter">
    <button @click="count--">Decrease</button>
    <p>{{ count }}</p>
    <button @click="count++">Increase</button>
  </div>

  <div>
    <p v-if="isLoggedIn">Welcome!</p>
    <p v-else>Please Login!</p>
    <button @click="toggleLogin">{{ isLoggedIn?"Logout":"Login" }}</button>
  </div>

  <div>
    <ul>
      <li v-for="user in users":key="user.id">
        <p>{{ user.name }} and {{ user.email }}</p>
      </li>
    </ul>
  </div>


</template>

<style scoped>
.message {
  font-size: 25px;
  font-weight: bold;
}
.counter{
  display:flex;
  margin-top:20px;
  gap:10px;
}

button{
  padding:10px;
}
</style>
