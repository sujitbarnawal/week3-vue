<script setup lang="ts">
import { ref } from 'vue';


const isMobileMenuVisible = ref(false)

</script>

<template>
    <div class="nav">
        <div class="main-nav">
            <p>MovieExplorer</p>
            <div class="links">
                <router-link to="/">Home</router-link>
                <router-link to="/movies">Movies</router-link>
                <router-link to="/movies/favourites">Favourites</router-link>
            </div>
            <p @click="isMobileMenuVisible = true" class="mobile-menu">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="crimson">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </p>
            <div v-if="isMobileMenuVisible" class="mobile-links">
                <p @click="isMobileMenuVisible=false" class="close-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="crimson">
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </p>
                <router-link to="/" @click="isMobileMenuVisible=false">Home</router-link>
                <router-link to="/movies" @click="isMobileMenuVisible=false">Movies</router-link>
                <router-link to="/movies/favourites" @click="isMobileMenuVisible=false">Favourites</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav {
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
}

.main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
}

.links {
    display: none;
    gap: 20px;
}

.mobile-menu {
    display: flex;
}

.mobile-links {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    padding: 20px;
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
}

.close-menu{
    text-align: right;
}

p {
    font-size: 20px;
    color: crimson;
}

:deep(a) {
    text-decoration: none;
    color: crimson;
    font-size: 18px;
    cursor: pointer;
}

:deep(.router-link-active) {
    text-decoration: underline;
}

@media (min-width:450px) {
    .links {
        display: flex;
    }

    .mobile-menu {
        display: none;
    }

}
</style>
