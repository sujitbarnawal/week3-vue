<script setup lang="ts">
defineProps<{ disabled: boolean }>()

const emit = defineEmits<{
  (e: "add-expense"): void
}>()
</script>

<template>
  <button
    @click="emit('add-expense')"
    :disabled="disabled"
    :class="{ disabledBtn: disabled }"
  >
    Add Expense
  </button>
  <hr>
</template>

<style scoped>
button {
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  background: linear-gradient(135deg,blue,purple);
  outline:none;
  color:white;
  width: 100%;
  font-size: 20px;
}
.disabledBtn {
  cursor: not-allowed;
  opacity: 0.6;
}

hr{
  margin-top: 10px;
}
</style>
