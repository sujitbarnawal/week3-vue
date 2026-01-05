<script setup lang="ts">
import type { Expense } from '@/types/ExpenseType';
import { computed, ref, watch } from 'vue';
import ExpenseInput from './ExpenseInput.vue';
import AddButton from './AddButton.vue';
import ExpenseList from './ExpenseList.vue';



    const title=ref("")
    const amount = ref<number|null>(null)
    const expenses = ref<Expense[]>(JSON.parse(localStorage.getItem('EXPENSES')||'[]'))
    const isValid=computed(()=>{
        return title.value.trim() !=="" && amount.value!=null && amount.value>0
    })

    function addExpense(){
        if(!isValid.value){
            return
        }
        expenses.value.push({
            id:Date.now(),
            title:title.value,
            amount:amount.value!
        })
        title.value=""
        amount.value=null
    }

    function removeExpense(id:number){
        expenses.value=expenses.value.filter(e=>e.id!==id )
    }

    const total=computed(()=>{
        return expenses.value.reduce((sum,expense)=>sum+expense.amount,0)
    })

    watch(expenses,(newExpenses)=>{
        localStorage.setItem('EXPENSES',JSON.stringify(newExpenses))

    },{deep:true})

   

</script>

<template>
    <div class="expense-container">
        <div class="add-expense">
            <ExpenseInput v-model:title="title" v-model:amount="amount"  />
            <AddButton @add-expense="addExpense" :disabled="!isValid" />
        </div>
        <div class="expense-list">
            <ExpenseList @remove-expense="removeExpense" :expenses="expenses"/>
        </div>
        <hr>
        <h3>Total: Rs.{{ total }}</h3>

    </div>
  
  
</template>

<style scoped>
    .expense-container{
        display: flex;
        flex-direction: column;
    }
    hr{
        margin-top: 10px;
    }
    h3{
        font-size: 20px;
        font-weight: bold;
    }

</style>