<script setup lang="ts">
import api from '@/api/axios';
import router from '@/router';
import { ref } from 'vue';



   

    const title = ref<string>("")
        const amount = ref<number|null>(null)
    
        const loading = ref(false)
        const error = ref<string|null>(null)

        const addExpense=async():Promise<void>=>{
            loading.value=true
            error.value=null
            try {
                await api.post('/expenses',{
                    id:(Date.now()).toString(),
                    title:title.value,
                    amount:amount.value
                })

                router.push('/expenses')
                
            } catch (error:any) {
                error.value="Failed to add expense"
            } finally{
                loading.value=false
            }
        }

</script>
<template>
    <div>
        <h1>Add Expense</h1>
        <form @submit.prevent="addExpense">
            <input type="text" v-model="title" placeholder="Expense Title" required  />
            <input type="number" v-model.number="amount" placeholder="Expense Amount" required>
            <button :disabled="loading" >{{ loading?"Adding...":"Add Expense" }}</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>

</template>
<style scoped></style>