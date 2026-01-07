<script setup lang="ts">
import api from '@/api/axios'
import router from '@/router'
import type { Expense } from '@/Types/ExpenseType'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const loading = ref(false)
const error = ref<string | null>(null)
const expense = ref<Expense | null>(null)

const deleteLoading = ref(false)
const deleteError = ref<string | null>(null)

const fetchExpense = async (): Promise<void> => {
  loading.value = true
  error.value = null

  try {
    const id = route.params.id
    const response = await api.get(`/expenses/${id}`)
    expense.value = response.data
  } catch {
    error.value = 'Expense Not Found'
  } finally {
    loading.value = false
  }
}

onMounted(fetchExpense)


const deleteExpense = async (): Promise<void> => {
  deleteLoading.value = true
  deleteError.value = null

  try {
    const id = Number(route.params.id)
    await api.delete(`/expenses/${id}`)
    router.push('/expenses')
  } catch {
    deleteError.value = 'Failed to delete expense'
  }
}

const editExpense = () => {
  const id = Number(route.params.id)
  router.push(`/expenses/${id}/edit`)
}
</script>

<template>
    <p v-if="loading">Loading....</p>
    <p v-if="error">{{ error }}</p>
    <div v-if="!loading && !error && expense">
        <h2>{{ expense.title }}</h2>
        <p>Amount: Rs.{{ expense.amount }}</p>

        <button @click="deleteExpense" :disabled="deleteLoading">{{deleteLoading?"Deleting...":"Delete"}}</button>
        <button @click="editExpense">Edit</button>
    </div>
</template>

<style scoped></style>