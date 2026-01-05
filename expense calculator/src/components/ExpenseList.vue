<script setup lang="ts">
import { EmitFlags } from "typescript";
import ExpenseItem from "./ExpenseItem.vue"
import type { Expense } from "@/types/ExpenseType"

const props = defineProps<{
  expenses: Expense[]
}>()
const emit = defineEmits<{
  (e:'remove-expense',id:number):void
}>()
</script>

<template>
  <h2>{{props.expenses.length===0?"No expenses": "Expense List"}}</h2>
  <div>
    <ExpenseItem
      v-for="expense in expenses"
      :key="expense.id"
      :expense="expense"
      @remove-expense="emit('remove-expense',expense.id)"
    />
  </div>
</template>

<style scoped>

  h2{
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
</style>
