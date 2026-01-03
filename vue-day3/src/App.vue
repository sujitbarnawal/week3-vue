<script setup>
import { ref, watch } from "vue";
import UserCard from "./components/UserCard.vue";
import UserProfile from "./components/UserProfile.vue";
import Counter from "./components/Counter.vue";
const userName=ref("Ganesh Acharya")
const userEmail=ref("ganesh@gmail.com")
const userRole=ref("React Developer Intern")
const total = ref(0)
const watchName = ref('')

watch(watchName,(newVal,oldVal)=>{
  console.log(`Changed from ${oldVal} to ${newVal}`)
})

function updateCount(value){
  total.value=value
}
</script>

<template>
  <h1>Components</h1>
  <UserCard />
  <h1>Components with props(Parent->Child Communication)</h1>
  <div class="user-profiles">
    <UserProfile username="Sujit Barnawal" email="sujit@gmail.com" role="Web Developer Intern" />
    <UserProfile username="Aaditya Dhungana" email="aaditya@gmail.com" role="Software Engineering Intern" />
    <UserProfile username="Roman Chhatkuli" email="roman@gmail.com" role="Fullstack Developer Intern " />
    <UserProfile :username="userName" :email="userEmail" :role="userRole"/>
  </div>
  <h1>Components with emits(Child->Parent Communication)</h1>
  <Counter @update="updateCount"/>
  <p>Child Count: {{ total }}</p>
  <h1>Watcher</h1>
  <input style="margin-bottom: 20px; padding: 20px; font-size: 20px;" type="text" placeholder="watcher name in console" v-model="watchName">
</template>

<style scoped>
.user-profiles {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
