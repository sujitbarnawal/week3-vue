<script setup>
import { ref,computed } from "vue";

const name = ref("");
const age = ref();
const ageStatus = computed(() => {
  if (!name.value) return;
  return age.value < 18 ? "minor" : "adult";
});
</script>
<template>
  <input placeholder="name" type="text" v-model="name" />
  <input placeholder="age" type="number" v-model.number="age" />
  <p v-if="name && age">{{ name }} is {{ ageStatus }}</p>
</template>
<style scoped></style>
