import { createRouter, createWebHistory } from 'vue-router'


const Home = ()=>import('../views/Home.vue')
const MovieList=()=>import('../views/MovieList.vue')
const MovieDetail=()=>import('../views/MovieDetail.vue')
const Favourites=()=>import('../views/Favourites.vue')
const PageNotFound=()=>import('../views/PageNotFound.vue')

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
    },{
        path:'/movies/favourites',
        name:"Favourites",
        component:Favourites
    },{
        path:'/:pathMatch(.*)*',
        name:"PageNotFound",
        component:PageNotFound
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router