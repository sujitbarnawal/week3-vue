import AddExpense from "@/views/AddExpense.vue";
import EditExpense from "@/views/EditExpense.vue";
import ExpenseDetails from "@/views/ExpenseDetails.vue";
import Expenses from "@/views/Expenses.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes =[
    {
        path:'/',
        redirect:'/expenses'
    },{
        path:'/expenses',
        component:Expenses
    },{
        path:'/expenses/:id',
        component:ExpenseDetails
    },{
        path:'/expense/add',
        component:AddExpense
    },{
        path:'/expenses/:id/edit',
        component:EditExpense
    },
    {
        path:'/:pathMatch(.*)*',
        component:PageNotFound
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router