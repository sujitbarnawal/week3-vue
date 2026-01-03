<script setup>
import { computed, ref } from "vue";
import MiniProject from "./components/MiniProject.vue";

const count = ref(0);
const isLoggedIn = ref(false);
const name = ref("");
const age = ref();

const username = ref("");
const email = ref("");

const increase = () => {
  count.value++;
};

const decrease = () => {
  count.value--;
};

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value;
};

const submitForm=()=>{
    alert(`${username.value} has submitted form with email ${email.value}`)
    username.value=""
    email.value=""
}

const countStatus = computed(() => {
  if (count.value % 2 === 0) return "even";
  else return "odd";
});
</script>

<template>
  <h1>Using Methods</h1>
  <div class="counter">
    <button @click="decrease">Decrement</button>
    <p>{{ count }}</p>
    <button @click="increase">Increment</button>
  </div>
  <h1>Computed properties</h1>
  <p style="font-size: 20px">{{ countStatus }}</p>
  <h1>v-show</h1>
  <div>
    <p v-show="isLoggedIn">Welcome</p>
    <button @click="toggleLogin">{{ isLoggedIn ? "Logout" : "Login" }}</button>
  </div>
  <h1>Two way Binding</h1>
  <input v-model="name" type="text" placeholder="Enter Username" />
  <p>{{ name }}</p>
  <input v-model.number="age" type="number" placeholder="Enter age" />
  <p>{{ age }}</p>

  <h1>Reactive form inputs and form submission</h1>
  <form @submit.prevent="submitForm">
    <input
      type="text"
      required
      v-model="username"
      placeholder="Enter your username"
    />
    <input
      type="email"
      required
      v-model="email"
      placeholder="Enter your email"
    />
    <button type="submit">Submit Form</button>
  </form>
  <div>
    <h1>MiniProject</h1>
    <MiniProject/>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 40px;
  border: 2px solid grey;
  width: 200px;
  justify-content: center;
  padding: 20px;
}
</style>
