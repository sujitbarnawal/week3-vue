<script setup lang="ts">

</script>

<template>
    <div class="nav">
        <div class="main-nav">
            <p>MovieExplorer</p>
            <div class="links">
                <router-link  to="/">Home</router-link>
                <router-link to="/movies">Movies</router-link>
                <router-link to="/movies/favourites">Favourites</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav {
    height: 60px;
    background-color: white;
    display: flex ;
    align-items: center;
    position: sticky;
    top: 0;
}

.main-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
}

.links{
    display: flex;
    gap: 20px;
}

p{
    font-size: 20px;
    color:crimson;
}

:deep(a){
    text-decoration: none;
    color: crimson;
    font-size: 18px;
    cursor:pointer;
}
:deep(.router-link-active){
    text-decoration: underline;
}



</style>
