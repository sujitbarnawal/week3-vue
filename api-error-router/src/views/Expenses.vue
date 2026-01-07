<script setup lang="ts">
import api from '@/api/axios'
import type { Expense } from '@/Types/ExpenseType'
import { onMounted, ref } from 'vue'

const expenses = ref<Expense[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const fetchExpenses = async (): Promise<void> => {
  loading.value = true
  error.value = null

  try {
    const response = await api.get<Expense[]>('/expenses')
    expenses.value = response.data
  } catch (err: any) {
    error.value = 'Failed to load expenses'
  } finally {
    loading.value = false
  }
}

onMounted(fetchExpenses)
</script>


<template>

    <div class="expenses">
        <h1>Expenses</h1>
        <p v-if="loading">Loading....</p>
        <p v-if="error" class="error">{{ error }}</p>
        <div v-if="!loading && !error">
            <p class="expense" v-for="expense in expenses" :key="expense.id">
                <router-link :to="`/expenses/${expense.id}`">{{ expense.title }} - Rs.{{ expense.amount }}</router-link>

            </p>

        </div>
    </div>


</template>

<style scoped>


.error {
    color: red;
}

.expense {
    cursor: pointer;
    padding: 10px;
    border: 2px solid black;
    border-radius: 10px;
    margin: 10px;
}
</style>
