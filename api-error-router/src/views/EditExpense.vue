<script setup lang="ts">
import api from '@/api/axios';
import router from '@/router';
import type { Expense } from '@/Types/ExpenseType';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const loading = ref(false)
const error = ref<string | null>(null)
const expense = ref<Expense | null>(null)
    const updateLoading=ref(false)
    const updateError = ref<string|null>(null)

const title = ref<string>(expense.value?.title || "")
const amount = ref(expense.value?.amount)



const fetchExpense = async (): Promise<void> => {
    loading.value = true
    error.value = null
    try {
        const id = route.params.id
        const response = await api.get(`/expenses/${id}`)
        expense.value = {
            id: response.data.id,
            title: response.data.title,
            amount: response.data.amount
        }

    } catch (error: any) {
        error.value = "Expense Not Found"

    } finally {
        loading.value = false
    }
}

onMounted(fetchExpense)



const updateExpense = async (): Promise<void> => {
    updateLoading.value = true
    updateError.value = null
    try {
        const id = route.params.id
        await api.put(`/expenses/${id}`, { title: title.value, amount: amount.value })
        router.push(`/expenses/${id}`)

    } catch (error: any) {
        updateError.value = "Failed to update expense"
    } finally {
        loading.value = false
    }
}

</script>
<template>
    <p v-if="loading">Loading....</p>
    <p v-if="error">{{ error }}</p>
    <div v-if="!loading && !error && expense">
        <h1>Update Expense</h1>
        <p>Expense Title: {{ expense.title }}</p>
        <p>Amount:Rs.{{expense.amount  }}</p>
        <input type="text"  v-model="title">
        <input type="number"  v-model.number="amount">
        <button @click="updateExpense" :disabled="updateLoading">{{ updateLoading ? "Updating..." : "Update" }}</button>
    </div>
</template>

<style scoped></style>