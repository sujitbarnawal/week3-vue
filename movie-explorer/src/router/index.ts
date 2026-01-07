import { createRouter, createWebHistory } from 'vue-router'


const Home = ()=>import('../views/Home.vue')
const MovieList=()=>import('../views/MovieList.vue')
const MovieDetail=()=>import('../views/MovieDetail.vue')

const routes=[
    {
        path:'/',
        name:"Home",
        component:Home
    },
    {
        path:'/movies',
        name:"MovieList",
        component:MovieList
    },{
        path:'/movie/:id',
        name:"MovieDetail",
        component:MovieDetail
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router