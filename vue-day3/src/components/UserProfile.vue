<script setup>

    const props = defineProps({
        username:String,
        email:String,
        role:String
    })
</script>

<template>
  
  <div class="user-profile">
    <h2>User Profile</h2>
    <p>Username : {{ username }}</p>
    <p>Email: {{email}}</p>
    <p>Role: {{ role }}</p>
  </div>
</template>

<style scoped>
.user-profile {
  padding: 40px;
  border: 2px solid grey;
  border-radius: 10px;
  font-size: 20px;
  width: fit-content;
}
</style>
