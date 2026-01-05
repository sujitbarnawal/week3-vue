<script setup lang="ts">
import type { Expense } from "@/types/ExpenseType"

defineProps<{
  expense: Expense
}>()

const emit =defineEmits<{
  (e:'remove-expense',id:number):void
}>()
</script>

<template>
  <p>
    {{ expense.title }} — Rs {{ expense.amount }}
    <button @click="emit('remove-expense',expense.id)">Remove</button>
  </p>
</template>


<style scoped>
  p{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-left: 2px;
  }
  button{
    outline: none;
    border-radius: 10px;
    color: white;
    background-color: red;
    border: none;
    cursor: pointer;
  }
</style>